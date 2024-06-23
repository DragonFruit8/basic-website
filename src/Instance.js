import axios from 'axios';

// Create an instance of Axios
const axio = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your API base URL
    timeout: 5000, // Set a timeout value in milliseconds
    headers: {
        'Content-Type': 'application/json', // Set the content type header
        // Add any other headers you need
    },
});

// Export the instance for use in other files
export default axio;