// conditional statements

// let i=1
// while(i<=5){
//     console.log(i);
//     i++;
// }


// for(let i=1;i<=5;i++){
//     console.log(i);
//     if(i===3){
//         break; // it will stop the loop when i is equal to 3 print 1 2 3 
//     }
// }

for(let i=1;i<=5;i++){
    if(i===3){
        continue; // it will skip the iteration when i is equal to 3 print 1 2 4 5
    }
    console.log(i);
}