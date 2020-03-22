function duplicateCount(s){
    let char = s.toLowerCase().split(''); 
    
    let arr = char.filter(function(a, b) {
      return char.indexOf(a) !== b;
    });
    
   
    return arr.filter(function(v, i) {
      return arr.indexOf(v) == i;
    }).length;
  }
    
  console.log(duplicateCount("Indivisibilities"));