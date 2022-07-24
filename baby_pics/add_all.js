var files = {'jpg':4};
for (var ext in files) {
    for (var i = 0; i < files[ext]; i++) {
        var src = "pics" + "-" + (i+1) + "." + ext;
        var img = new Image(); 
        img.src = src;
        containerElement.appendChild(img);
    }
}


const testFolder = '/path/to/image/folder/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});