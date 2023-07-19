const fs = require('fs');
const axios = require('axios');

// URL of the index file
const indexFileUrl = 'https://www.careerswave.in/mumbai-mirror-epaper-download/';

// Function to save the index file
async function saveIndexFile() {
  try {
    // Fetch the contents of the index file
    const response = await axios.get(indexFileUrl);
    const indexFileContents = response.data;

    // Save the index file locally
    fs.writeFileSync('index.html', indexFileContents);
    console.log('Index file saved successfully!');
  } catch (error) {
    console.error('Error saving index file:', error);
  }
}

// Call the function to save the index file
saveIndexFile();
