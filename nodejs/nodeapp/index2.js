import fs from 'fs';

// fs.writeFile("myfile.txt","Hello world!", (err) => { // it will create myfile.txt folder automatically after run
//     if (err) throw err;
// });

// fs.appendFile("myfile.txt","Hello world!\n", (err) => { // it will create myfile.txt folder automatically after run and prints hello world as many times it runs 
//     if (err) throw err;
// });


// fs.readFile("about.txt", "utf-8", (err, data) => { // read the file and prints in terminal
//     if (err) throw err;
//     console.log(data);
// });


// fs.rename("myfile.txt", "newfile.txt", (err) =>{ // changes myfile.txt name to newfile.txt
//     if (err) throw err;
// })

// fs.writeFile("file.txt","Hello world!", (err) => { // it will create file.txt folder automatically after run
//     if (err) throw err;
// });

fs.unlink("file.txt" ,(err) =>{ // delete the file.txt 
    if (err) throw err;
});