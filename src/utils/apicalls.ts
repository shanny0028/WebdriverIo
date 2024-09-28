const axios = require('axios'); // Importing Axios

const getApiResponse = async () => {
    let url2 = "https://apiurl/resource"; // Make sure the URL is valid

    try {
        const response = await axios({
            method: 'post',        // Specify the HTTP method
            url: url2, 
            Headers:Headers,            // Use the URL variable
            data: {
                // Include data here if necessary for the POST request
            },
        });

        console.log(response.data); // Log the API response
        return response.data;       // Return the API response if needed

    } catch (error) {
        console.error('Error making API request:', error); // Handle any errors
    }
};

module.exports = { getApiResponse }; // Exporting the function if needed
