const countOnes = (s) => {
  let  binary = '';
    while ( s > 0 ) { binary = ( s % 2 ) + binary;
        s = Math.floor( s / 2 ); } 
        binary = binary.toString()
        let count =0;
        for(i=0;i<binary.length;i++){
            if(binary[i]==="1"){
                count++
            }
        } 
        return count
    }




console.log(countOnes(223344))