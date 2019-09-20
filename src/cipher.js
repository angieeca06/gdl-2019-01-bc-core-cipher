window.cipher = {

   encode: (offSet, letter) =>{
    let result = '';
    for(let i=0; i<letter.length; i++){
        let nAscii = letter.charCodeAt(i)
        if(nAscii>=97 && nAscii<=122){
            let nletra = letter.charCodeAt(i);
            let formula = ((nletra - 97 + offSet) % 26 )+ 97;
            result = result + (String.fromCharCode(formula));
        }else if(nAscii >= 65 && nAscii <= 90 ){
            let nletra = letter.charCodeAt(i);
            let formula = ((nletra - 65 + offSet) % 26 )+ 65;
            result = result + (String.fromCharCode(formula));
        }else{
            result = result + (String.fromCharCode(nAscii));
        }
    }
    return result;
},

  decode: (offSet,letter) =>{
    let result = '';
    for(let i=0; i<letter.length; i++){
        let nAscii = letter.charCodeAt(i)
        if(nAscii>=97 && nAscii<=122){
            let nletra = letter.charCodeAt(i);
            let formula = ((nletra + 97 - offSet) % 26 )+ 97;
            result = result + (String.fromCharCode(formula));
        }else if(nAscii >= 65 && nAscii <= 90 ){
            let nletra = letter.charCodeAt(i);
            let formula = ((nletra + 65 - offSet) % 26 )+ 65;
            result = result + (String.fromCharCode(formula));
        }else{
            result = result + (String.fromCharCode(nAscii));
        }
    }
    return result;
}
};
