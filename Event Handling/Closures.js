// Closure is a function that remembers the environment in which it was created even after the outer function has finished executing
function outerfunction(){
    let outervar="outside";
    function innerfunction(){
        console.log(outervar);
    }
    return innerfunction;
}
const closurefunction=outerfunction();
closurefunction();

function counter(){
    let count=0;

    return{
        increment: function(){
            count+=1;
        },
        decrement:function(){
            count-=1;
        },
        display:function(){
            console.log(count);
        }
    }
}

let countvalue=counter();
countvalue.display();
countvalue.increment();
countvalue.display();
countvalue.decrement();
countvalue.display();