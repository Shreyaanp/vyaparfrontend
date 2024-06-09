const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

// Function to rename .js files to .jsx
function renameFiles(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Unable to scan directory: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error(`Unable to read file stats: ${err}`);
          return;
        }

        if (stat.isDirectory()) {
          // Recursively rename files in subdirectories
          renameFiles(filePath);
        } else if (path.extname(file) === '.js') {
          const newFilePath = path.join(dirPath, path.basename(file, '.js') + '.jsx');
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error(`Error renaming file: ${err}`);
            } else {
              console.log(`Renamed: ${filePath} -> ${newFilePath}`);
            }
          });
        }
      });
    });
  });
}

// Start renaming process
renameFiles(directoryPath);
