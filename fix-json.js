const fs = require("fs");

// Load your current JSON
let data = JSON.parse(fs.readFileSync("data.json"));

// Convert to correct format
let fixedData = data.map(item => {
    return {
        cnic: item.A.replace(/"/g,'').trim(),
        name: item.B
    };
});

// Save to new JSON file
fs.writeFileSync("data_fixed.json", JSON.stringify(fixedData, null, 2));

console.log("✅ All CNICs fixed! Saved as data_fixed.json");