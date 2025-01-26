const News = require('../model/news'); // Import the News model

const getNews = async (req, res) => {
  try {
    const { tags, title, companyName, shortIntro, limit = 10, page = 1 } = req.query; // Extract filter, pagination parameters from query

    // Initialize the filter object
    const filter = {};

    // Filter by tags (tags should be an array, split by commas in the URL)
    if (tags) {
      filter.tags = { $all: tags.split(',') }; // Use $all to match documents that contain all the tags provided
    }

    // Filter by title (case-insensitive search)
    if (title) {
      filter.title = { $regex: title, $options: 'i' }; // 'i' makes the search case-insensitive
    }

    // Filter by companyName (case-insensitive search)
    if (companyName) {
      filter.companyName = { $regex: companyName, $options: 'i' };
    }

    // Filter by shortIntro (case-insensitive search)
    if (shortIntro) {
      filter.shortIntro = { $regex: shortIntro, $options: 'i' };
    }

    // Parse limit and page as integers
    const limitNum = parseInt(limit, 10);
    const pageNum = parseInt(page, 10);

    // Fetch the filtered news articles with pagination
    const news = await News.find(filter)
      .skip((pageNum - 1) * limitNum) // Skip documents for pagination
      .limit(limitNum); // Limit the number of documents returned

    // Get the total count for pagination metadata
    const totalNewsCount = await News.countDocuments(filter);

    // If no news articles are found, return a message
    if (news.length === 0) {
      return res.status(200).json({ data: [], message: 'No news found for the given filters' });
    }

    // Return the filtered news articles along with pagination metadata
    res.status(200).json({
      message: 'News fetched successfully',
      data: news,
      meta: {
        total: totalNewsCount,
        limit: limitNum,
        page: pageNum,
        totalPages: Math.ceil(totalNewsCount / limitNum),
      },
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({
      message: 'Error fetching news',
      error: error.message,
    });
  }
};

module.exports = {
  getNews,
};
