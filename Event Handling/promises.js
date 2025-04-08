let data={};
setTimeout(()=>{
    data={name:"John",age:20};
},2000);


function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },1000);
    })
}

fetchdata().then(
    data=>{
        console.log("Data:",data);
    }).catch(err=>{
        console.log("Error:",err);
    })
