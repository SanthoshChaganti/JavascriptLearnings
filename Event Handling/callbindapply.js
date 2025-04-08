function cook(item1,item2,item3){
    console.log(`${this.name} eats ${item1}, ${item2} and ${item3}`);
}

const santhosh={name:"Santhosh"};
//Executes Immediately and arguments are sent seperately to the function
cook.call(santhosh,"rice","dal","water");
//Executes Immediately andr arrguments ar passed atonce using array
cook.apply(santhosh,["rice","dal","water"]);

const canexecutewheneverneeded=cook.bind(santhosh,"rice","dal","water");
canexecutewheneverneeded();