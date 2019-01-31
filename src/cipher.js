window.cipher = {

   encode: (offSet, letter) =>{
    let result = '';
    for(let i=0; i<letter.length; i++){
        let nletra = letter.charCodeAt(i);
        let formula = ((nletra - 65 + offSet) % 26 )+ 65;
        result = result + (String.fromCharCode(formula));
    }
    return result;
},

  decode: (offSet,letter) =>{
   let result = "";
    for(let i=0; i<letter.length; i++){
        let nletra = letter.charCodeAt(i);
        let formula = ((nletra + 65 - offSet) % 26 )+ 65;
        result = result + (String.fromCharCode(formula));
    }
   return result;
  
}
};
