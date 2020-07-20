// new Promise((resolve, reject) => {
//     let i = 0;
//     let eee = setInterval(() => {
//         i++;
//         console.log(i);
//         if (i === 3) {
//             clearInterval(eee);
//             resolve();
//         }
//     })
// })
// .then(() => {
//     let i = 0;
//     let eee = setInterval(() => {
//         i++;
//         console.log(i);
//         if (i === 3) {
//             clearInterval(eee);
//         }
//     })
// })
// .then(() => {
//     console.log(4);
// })

// console.log()

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
}