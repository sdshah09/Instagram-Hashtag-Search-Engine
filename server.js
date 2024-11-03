const express = require('express');
const { ApifyClient } = require('apify-client');
const cors = require('cors'); // Import cors
require('dotenv').config(); // Load environment variables
const app = express();
const PORT = 5000;

console.log
// Initialize the ApifyClient with your Apify API token
const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN // Replace with your actual Apify API token
});

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Endpoint to scrape Instagram hashtag
app.post('/scrape-hashtag', async (req, res) => {
    const { hashtag } = req.body;

    if (!hashtag) {
        return res.status(400).json({ error: 'Hashtag is required' });
    }

    const input = {
        hashtags: [hashtag],
        resultsLimit: 20
    };

    try {
        const run = await client.actor("apify/instagram-hashtag-scraper").call(input);
        console.log(`Results from dataset: https://console.apify.com/storage/datasets/${run.defaultDatasetId}`);

        const { items } = await client.dataset(run.defaultDatasetId).listItems();

        const data = items.map(item => ({
            postUrl: item.url,
            imageUrl: item.imageUrl
        }));

        res.json(data);
    } catch (error) {
        console.error("Error fetching Instagram hashtag data:", error);
        res.status(500).json({ error: 'Failed to scrape hashtag' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
