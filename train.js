// console.log("Jack Ma maslaxatlari");
// const list = [
//     'yashi talaba buling',  //0-20
//     'tugri boshliq tanlang va kupro xato qiling',  //20-30
//     'uzingizga ishlashni boshlang',  //30-40
//     'siz kuchli bulgan narsalarni qiling', //40-50
//     'yoshlarga investitsia qiling',  //50-60
//     'endi dam oling, foydasi yuq endi',  //60
// ];

// // CALLBACK functions
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null,list[1]);
//     else if(a > 30 && a <= 40) callback(null,list[2]);
//     else if(a > 40 && a <= 50) callback(null,list[3]);
//     else if(a > 50 && a <= 60) callback(null,list[4]);
//     else {
//             setTimeout(function() {
//                 callback(null, list[5]);
//             }, 5000);
            
    
//     }
// }

// console.log('passed here 0');
// maslahatBering(55,(err, data) => {
//     if (err) console.log('ERROR:', err);
//     else {
//     console.log('javob:',data);
//     }
// });
// console.log('passed here 1');
    


// // console.log('passed here 0');
// // maslahatBering(70, (err, data) =>{
// //     if (err) console.log("ERROR:", err);
// //     else {
// //         console.log(data);
// //     }
// // });
// // console.log("passed here 1");

// // maslahatBering(10, (err, data) => {
// //     if(err) console.log('ERROR:', err);
// //     else {
// //         console.log('javob:',data);
// //     }
// // });
// // console.log("passed here 1");



// // call via then/catch
// // console.log("passed here 0");
// // maslahatBering(25)
// // .then((data) => {
    
// // console.log('javob:', data);
// // })
// // .catch(err => {
// //     console.log('ERROR', err);
// // });
// // console.log("passed here 1");



// //call via asyn/wait 
// // async function run() {
// //     let javob = await maslahatBering(20);
// //     console.log(javob);
// //     javob = await maslahatBering(31);
// //     console.log(javob);
// //     javob = await maslahatBering(41);
// //     console.log(javob);
// // }



// // console.log("Jack Ma maslaxatlari");
// // const list = [
// //     'yashi talaba buling',  //0-20
// //     'tugri boshliq tanlang va kupro xato qiling',  //20-30
// //     'uzingizga ishlashni boshlang',  //30-40
// //     'siz kuchli bulgan narsalarni qiling', //40-50
// //     'yoshlarga investitsia qiling',  //50-60
// //     'endi dam oling, foydasi yuq endi',  //60
// // ];

// // //ASYNC funtions
// // async function maslahatBering(a) {
// //     if(typeof a !== 'number') throw new Error("insert a number");
// //     else if(a <= 20) return list[0];
// //     else if(a > 20 && a <= 30)  return list[1];
// //     else if(a > 30 && a <= 40)  return list[2];
// //     else if(a > 40 && a <= 50)  return list[3];
// //     else if(a > 50 && a <= 60)  return list[4];
// //     else {

// //         return new Promise((resolve, reject) => {

// //             setTimeout(() => {
// //                 resolve(list[5]);
// //             }, 5000);
// //         });
       
// //     }
    
// // }

// // async function run() {
// //     let javob = await maslahatBering(25);
// //     console.log(javob);
// //     javob = await maslahatBering(70);
// //     console.log(javob);
// //     javob = await maslahatBering(41);
// //     console.log(javob);
// // }
// //  run();




// // console.log("Jack Ma maslaxatlari");
// // const list = [
// //     'yashi talaba buling',  //0-20
// //     'tugri boshliq tanlang va kupro xato qiling',  //20-30
// //     'uzingizga ishlashni boshlang',  //30-40
// //     'siz kuchli bulgan narsalarni qiling', //40-50
// //     'yoshlarga investitsia qiling',  //50-60
// //     'endi dam oling, foydasi yuq endi',  //60
// // ];


// // function maslahatBering(a, callback) {
// //     if(typeof a !== 'number') callback("insert a number", null);
// //     else if(a <= 20) callback(null, list[0]);
// //     else if(a > 20 && a <= 30) callback(null,list[1]);
// //     else if(a > 30 && a <= 40) callback(null,list[2]);
// //     else if(a > 40 && a <= 50) callback(null,list[3]);
// //     else if(a > 50 && a <= 60) callback(null,list[4]);
// //     else {
// //         setInterval(function() {
// //             callback(null, list[5]);
// //         }, 1000);
    
// //     }
    
// // }

// // console.log('passed here 0');
// // maslahatBering(70, (err, data) =>{
// //     if (err) console.log("ERROR:", err);
// //     else {
// //         console.log(data);
// //     }
// // });
// // console.log("passed here 1");




//Task D


// const moment = require("moment");
// // const bodyParser = require("body-parser");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.bread = non;
//     this.pasta = lagmon;
//     this.drink = cola;
//   }

//   qoldiq() {
//     console.log(`${moment().format('HH:mm')}da sizda ${this.bread} ta non, ${this.pasta} ta lag'mon va ${this.drink} ta cola mavjud!`);
//   }

//   sotish(mahsulot, miqdor) {
//     if (mahsulot === 'non') {
//       this.bread -= miqdor;
//     } else if (mahsulot === 'lagmon') {
//       this.pasta -= miqdor;
//     } else if (mahsulot === 'cola') {
//       this.drink -= miqdor;
//     }
//     console.log(`${moment().format('HH:mm')}da ${miqdor} ta ${mahsulot} sotildi!`);
//   }

//   qabul(mahsulot, miqdor) {
//     if (mahsulot === 'non') {
//       this.bread += miqdor;
//     } else if (mahsulot === 'lagmon') {
//       this.pasta += miqdor;
//     } else if (mahsulot === 'cola') {
//       this.drink += miqdor;
//     }
//     console.log(`${moment().format('HH:mm')}da ${miqdor} ta ${mahsulot} qabul qilindi!`);
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq(); // Output: 20:40da sizda 4 ta non, 5 ta lag'mon va 2 ta cola mavjud!
// shop.sotish('non', 3); // Output: 20:50da 3 ta non sotildi!
// shop.qabul('cola', 4); // Output: 20:50da 4 ta cola qabul qilindi!
// shop.qoldiq(); // Output: 20:50da sizda 1 ta non, 5 ta lag'mon va 6 ta cola mavjud!


function number(num)
{
  if (num===1)
  {
    return false;
  }
  else if(num === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < num; x++)
    {
      if(num % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(number(5));