const timerId=setInterval(()=>{
console.log("Hello after every 2 sec");
},2000);

setTimeout(()=>{
    clearInterval(timerId);
},6000);