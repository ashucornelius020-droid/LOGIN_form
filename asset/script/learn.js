
var a; 
var b;
//adding two numbers using a function
function sum( a, b){
     console.log(` this is addition:\t ${a + b}`);
}
sum( 3, 6);

//subtracting two numbers using a function
function diff( a, b){
    return a - b;
}
console.log(diff(4,6));

//multipling two numbers using a function
function mult(a,b){
    console.log(a * b);
}
mult(3,4);

//diving two numbers using a function
function div(a,b){
    console.log(a / b);
}
div(6,3)

var isfemale = true;
var name = ""
console.log(typeof(isfemale));
console.log(typeof(name));

var list =[2,4,8];
/*console.log(` Displaying a list: ${list}`);
list.push(3,4,12,34);
console.log(` Displaying a list: ${list}`);
list.push(34);
list.shift();
console.log(list);*/
function change(list,index){
    list.push(index);
    return list.shift();
}

console.log(change(list, 19));

function compare(a, b){
    if(a > b){
        return ` ${a} is greater than ${b}`;
    }

    /*if(a ==  b){
        return ` ${a} is equal to ${B}`;
    }*/

    else{
        return `${b} is greater than ${a}`;
    }
}

console.log(compare( -2.5, -3.2));
