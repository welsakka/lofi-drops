//https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5

//requiring path and fs modules
const path = require('path');
const fs = require('fs');

export default function FileReader(musicFolder) {

    const arr = [];
    //joining path of directory 
    const directoryPath = path.join(__dirname, musicFolder);
    
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            arr.push(file);
        });
    });

    return arr;
}