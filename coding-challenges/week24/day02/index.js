function helpBob(q){
 
    q = q.split(" ").map(function(n){return parseInt(n)});
    let odd = q.filter(function(el){ return el % 2 === 1});
    let even = q.filter(function(el){ return el % 2 === 0});
    return odd.length < even.length ? (q.indexOf(odd[0])+1) : (q.indexOf(even[0])+1);

}


console.log(helpBob("1 3 5 6 7 9"));