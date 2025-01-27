const Competition = require("../model/competition"); // Adjust the path as necessary

// Fetch all competitions with filtering, sorting, and pagination
const getAllCompetitions = async (req, res) => {
  try {
    const { search, prizeOrder = "desc", created = "desc", page = 1, limit = 10 } = req.query; // Get query parameters

    // Build the filter object
    const filter = {};
    const sort = {};

    // Add search filter (case-insensitive search on name and organizer)
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } }, // Search in name
        { organizer: { $regex: search, $options: "i" } }, // Search in organizer
      ];
    }

    // Add sorting for prizePool
    if (prizeOrder === "desc") {
      sort.prizePool = -1; // Sort by prizePool in descending order
    } else {
      sort.prizePool = 1; // Sort by prizePool in ascending order
    }

    // Add sorting for createdAt
    if (created === "desc") {
      sort.createdAt = -1; // Sort by createdAt in descending order
    } else {
      sort.createdAt = 1; // Sort by createdAt in ascending order
    }

    // Convert page and limit to numbers
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    // Calculate the number of documents to skip
    const skip = (pageNumber - 1) * limitNumber;

    // Fetch competitions with filtering, sorting, and pagination
    const competitions = await Competition.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limitNumber);

    // Get the total number of competitions (for pagination metadata)
    const totalCompetitions = await Competition.countDocuments(filter);

    // Calculate total pages
    const totalPages = Math.ceil(totalCompetitions / limitNumber);

    // If no competitions are found, return an empty array
    if (competitions.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No competitions found.",
      });
    }

    // Return the filtered, sorted, and paginated competitions
    res.status(200).json({
      success: true,
      data: competitions,
      pagination: {
        totalCompetitions, // Total number of competitions
        totalPages, // Total number of pages
        currentPage: pageNumber, // Current page
        limit: limitNumber, // Number of competitions per page
      },
    });
  } catch (error) {
    console.error("Error fetching competitions:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const fetchCompetitionById = async (req, res) => {
  try {
    // Extract the job ID from the request parameters
    const { id } = req.params;

    // Fetch the job from the database using the provided ID
    const competition = await Competition.findById(id);

    // Check if the job exists
    if (!competition) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Respond with the job data if found
    res.status(200).json({
      success: true,
      data: competition,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the job.",
      error: error.message,
    });
  }
};



const getLatestCompetitions = async (req, res) => {
  try {
    // Fetch the latest 6 competitions, sorted by createdAt in descending order
    const latestCompetitions = await Competition.find({})
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .limit(6); // Limit the results to 6 competitions

    // If no competitions are found, return an empty array
    if (latestCompetitions.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No competitions found.",
      });
    }

    // Return the latest competitions
    res.status(200).json({
      success: true,
      data: latestCompetitions,
    });
  } catch (error) {
    console.error("Error fetching latest competitions:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllCompetitions,
  getLatestCompetitions,
  fetchCompetitionById,
};