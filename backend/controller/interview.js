const Video = require("../model/interview"); // Adjust the path as necessary

// Fetch videos with pagination, filtering by type, and searching by title
const getVideos = async (req, res) => {
  try {
    const { page = 1, limit = 10, type, search } = req.query; // Get query parameters

    // Build the filter object
    const filter = {};

    // Add type filter (if provided)
    if (type) {
      filter.type = type; // Filter by video type
    }

    // Add search filter (case-insensitive search on title)
    if (search) {
      filter.title = { $regex: search, $options: "i" }; // Search in title
    }

    // Convert page and limit to numbers
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    // Calculate the number of documents to skip
    const skip = (pageNumber - 1) * limitNumber;

    // Fetch videos with filtering, sorting, and pagination
    const videos = await Video.find(filter)
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .skip(skip)
      .limit(limitNumber);

    // Get the total number of videos (for pagination metadata)
    const totalVideos = await Video.countDocuments(filter);

    // Calculate total pages
    const totalPages = Math.ceil(totalVideos / limitNumber);

    // If no videos are found, return an empty array
    if (videos.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No videos found.",
      });
    }

    // Return the filtered, sorted, and paginated videos
    res.status(200).json({
      success: true,
      data: videos,
      pagination: {
        totalVideos, // Total number of videos
        totalPages, // Total number of pages
        currentPage: pageNumber, // Current page
        limit: limitNumber, // Number of videos per page
      },
    });
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  getVideos,
};