import * as fs from 'fs';
let path = require('path');
let pathDir = '/path/to/myFolder';
const execSync = require('child_process').execSync;

let readInsideSrc = (error: any, files: any, fromPath: any) => {
    if (error) {
        console.error('Could not list the directory.', error);
        process.exit(1);
    }

    files.forEach((file: any, index: any) => {
        if (file.endsWith('.ts')) {
            //set the path and read the webpack.config.js file as text, replace path
            let config = fs.readFileSync('myFile.js', 'utf8');
            let fileName = file.replace('.ts', '');
            let replacedConfig = config.replace(/__placeholder/g, fileName);

            //write the changes to the file
            fs.writeFileSync('myFile.js', replacedConfig);

            //run the commands wanted
            const output = execSync('npm run scriptName', { encoding: 'utf-8' });
            console.log('OUTPUT:\n', output);

            //rewrite the original file back
            fs.writeFileSync('myFile.js', config);
        }
    });
};

// loop through all files in 'path'
let passToTest = (error: any, files: any) => {
    if (error) {
        console.error('Could not list the directory.', error);
        process.exit(1);
    }

    files.forEach(function (file: any, index: any) {
        let fromPath = path.join(pathDir, file);
        fs.stat(fromPath, function (error2: any, stat: any) {
            if (error2) {
                console.error('Error stating file.', error2);
                return;
            }

            if (stat.isDirectory()) {
                fs.readdir(fromPath, (error3: any, files1: any) => {
                    readInsideSrc(error3, files1, fromPath);
                });
            } else if (stat.isFile()) {
                //do nothing yet
            }

        });
    });
};

//run the bootstrap
fs.readdir(pathDir, passToTest);
