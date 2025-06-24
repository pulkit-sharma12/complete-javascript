/*-->>>>PROMISES-->>>> A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
  
Pending: The promise is still in progress (neither fulfilled nor rejected).

Fulfilled: The promise was completed successfully, and a result is available.

Rejected: The promise failed, and an error is returned.

  */












let promise = new Promise((resolve, reject) => {
   console.log("hello!!!");
   //resolve(1234);
   reject("error");
});


function getData(dataId, getNewData) {

   return new promise((resolve, reject) => {
      setTimeout(() => {
         console.log(dataId);
         resolve("success");
         if (getNewData) {
            getNewData();
         }
      }, 2000);
   });

}


// .then and .catch promises----------->>>>>>>>>>>
const getPromise = () => {
   return new Promise((resolve, reject) => {
      console.log("promised to you");
      resolve("success");
   });
};

let promise2 = getPromise();
promise2.then((res) => {
   console.log("fullfilled");
   console.log(res);
});


//--------->>>>>>>>>promise chain----->>>>>>>
function asyncFun1() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data1");
         resolve("success");
      }, 3000);
   });
}

function asyncFun2() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data2");
         resolve("success");
      }, 3000);
   });
}

console.log("fecthing data1..");
let p1 = asyncFun1();
p1.then((res) => {
   console.log(res);
   console.log("fecthing data2....")
   let p2 = asyncFun2();
   p2.then(() => { });
});
