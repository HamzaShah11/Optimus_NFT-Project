const fs = require("fs");
const path = require('path');
const dirPath = path.join(__dirname, 'Optimus')

var count = 0;
fs.readdir(dirPath, (err, files) => {
    const obj = [];

    files.forEach((item) => {      
        let str = item;

        str = str.substring(0, str.length - 4);
        let temp=str.replace(" ", "%20");
        let temp1=temp.replace(" ", "%20");
        let temp2=temp1.replace("#","%23" );

         student = {
            id: count,
            name: str,
            Description: 'Optimus NFT',
            image: 'https://gateway.pinata.cloud/ipfs/QmR12JCgU7yQEyEYvQsuh5E8mMZqwBdmkNwZ1MJDo2h3nV/'+temp2+".png",
            level: 'level ' + count
        }

        count++;
        obj.push(student);
    })
    let data = JSON.stringify(obj, null, 2);
    fs.writeFile('JSON.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
})


