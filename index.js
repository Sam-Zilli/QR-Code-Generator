import inquirer from "inquirer";
import qr from 'qr-image';
import fs, { open, close, appendFile } from 'node:fs';


const getUrl = [ { 
    type : "input", 
    name : "urlRequested", 
    message : "Whats the URL you want a QR image for?" 
} ]

function closeFd(fd) {
    close(fd, (err) => {
      if (err) throw err;
    });
  }

// npm package for getting user input 
inquirer 
    .prompt(getUrl) 
    .then((answers) => 
        { 
        console.log("Here ya go...");

        open('URL.txt', 'a', (err, fd) => {
            if (err) throw err;
          
            try {
              appendFile(fd, ("\n" + answers.urlRequested), 'utf8', (err) => {
                closeFd(fd);
                if (err) throw err;
              });
            } catch (err) {
              closeFd(fd);
              throw err;
            }
          });
        
        var qrImg = qr.image(answers.urlRequested, { type: 'png' });
        qrImg.pipe(fs.createWriteStream('qr_img.png'));
        

        }) 
    .catch((error) => { if (error.isTtyError) 
        { "Sorry, something went wrong." } 
        else 
        { "Sorry, something went wrong." } });