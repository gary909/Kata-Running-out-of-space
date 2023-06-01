function spacey(array){
    let myStr = '';
    let myArr = [];
    for(let i = 0; i < array.length; i++){
        myStr = myStr + array[i];
        myArr.push(myStr);
    }
return myArr;
}

console.log(spacey(['kevin', 'has','no','space'])); // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
console.log(spacey(['this','cheese','has','no','holes'])); 
// ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']