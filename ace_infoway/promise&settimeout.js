// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("its me");
//     },3000)  
// });
// myPromise.then((data)=>{
//     console.log(data);
//     // alert("hii");
// }).catch((err) =>{
//     console.log("error"+err)
//     alert("hi error");
// })


// const myFirstPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("first");
//     },2000);

// });

// const SecondPromise = new Promise((resolve) => {
//     setTimeout(() =>{
//         resolve("second");
//     },2000)
// })
// myFirstPromise.then((data)=>{
//     console.log(data);
//     return SecondPromise;
// }).then((data)=>{
//     console.log(data);
// }).catch((data) =>{
//     console.log("error"+data);
// })

// const p = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("done");
//     },3000);
// });

// async function demo() {
//     const ans = await p;
//     //js engin waits to complete it 
//     console.log("after done");
//     console.log(ans);
// }
// demo();

// function getData() {
//     p.then((data)=>{console.log(data)})
//     console.log("hello")
// }

// getData();


//Exception Handling
// function div(x,y) {
//     if(y==0){
//         throw new Error("div by 0");
//     }
//     return x/y;
// }
// try{
//     const ans =div(25,0)
//     console.log("ans:"+ans);

// }catch(err){
//     console.log(err);
// }finally{
//     console.log("finally");
// }

