# Instagram-Hashtag-Search-Engine
## Features
- Scrapes Instagram posts related to a specific hashtag.
= Displays a list of clickable Instagram post links.
- Responsive and aesthetic UI with React.
- Cross-Origin Resource Sharing (CORS) enabled to connect the frontend and backend.
## Technologies Used
- Node.js and Express: For the backend server.
- React: For the frontend user interface.
- Apify API: For scraping Instagram data.
- Axios: For making HTTP requests from React.
- CORS: To handle cross-origin requests between the frontend and backend.

## Prerequisites
- Node.js and npm installed on your machine.
- Apify account to obtain an API token (sign up at Apify if you don’t have one).

## Usage
- Open the Application: In your browser, go to http://localhost:3000.
- Enter a Hashtag: Type a hashtag (e.g., cars, nature, etc.) and click Search.
- View the Results: The application will display clickable links for Instagram posts related to the specified hashtag.


## Troubleshooting
- CORS Errors: If you encounter CORS issues when making requests from the frontend to the backend, ensure that CORS is enabled in server.js in the backend by using app.use(cors());.
- API Token Issues: If the Apify API fails, double-check that your API_TOKEN in the .env file is correct.
- Missing Image URLs: If Instagram image URLs are not showing up, Instagram may be blocking access to certain content. The project is set up to show only the post URLs in such cases.
License
- This project is open-source and available under the MIT License. See the LICENSE file for more information.

