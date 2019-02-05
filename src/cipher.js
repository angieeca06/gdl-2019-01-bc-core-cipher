window.cipher = {

   encode: (offSet, letter) =>{
    let result = '';
    letter=letter.toUpperCase();
    for(let i=0; i<letter.length; i++){
        if(letter.charCodeAt(i) === 32){
            result = result + (String.fromCharCode(32));
        }else{
            let nletra = letter.charCodeAt(i);
            let formula = ((nletra - 65 + offSet) % 26 )+ 65;
            result = result + (String.fromCharCode(formula));
        }
    }
    return result;
},

  decode: (offSet,letter) =>{
   let result = "";
   letter=letter.toUpperCase();
    for(let i=0; i<letter.length; i++){
        if(letter.charCodeAt(i) === 32){
            result = result + (String.fromCharCode(32));
        }else{
            let nletra = letter.charCodeAt(i);
            let formula = ((nletra + 65 - offSet) % 26 )+ 65;
            result = result + (String.fromCharCode(formula));
        }
    }
   return result;
  
}
};
