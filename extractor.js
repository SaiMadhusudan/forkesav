const fs = require('fs');
const cheerio = require('cheerio');

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Parse the HTML using Cheerio
const $ = cheerio.load(html);

// Array to store the extracted links
const extractedLinks = [];

// Find all table rows (tr) with the desired data attributes
$('tr[data-row_id][class^="ninja_table_row_"]').each((index, element) => {
  const cells = $(element).find('td');

  // Extract links from the second and third cells (index 1 and 2)
  for (let j = 1; j < cells.length; j++) {
    const link = $(cells[j]).text().trim();

    // Check if the link starts with 'http' to identify HTML links
    if (link.startsWith('http')) {
      extractedLinks.push(link);
    }
  }
});

// Display the extracted links
fs.writeFileSync('thankmelater.txt', extractedLinks.join('\n'));

console.log('Links saved to thankmelater.txt');
console.log("Done By Sai Madhusudan Gunda")
