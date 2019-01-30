const encode = () =>{
    const offSet = parseInt(document.getElementById('posicionesC').value);
    const letter = document.getElementById('mensajeC').value;
    let result = "";
    for(let i=0; i<letter.length; i++){
        const nletra = letter.charCodeAt(i);
        const formula = ((nletra - 65 + offSet) % 26 )+ 65;
        result = result + (String.fromCharCode(formula));
    }
    document.getElementById('resultadoC').innerHTML = result;
}

const decode = () =>{
    const offSet = parseInt(document.getElementById('posicionesD').value);
    const letter = document.getElementById('mensajeD').value;
    let result = "";
    for(let i=0; i<letter.length; i++){
        const nletra = letter.charCodeAt(i);
        const formula = ((nletra + 65 - offSet) % 26 )+ 65;
        result = result + (String.fromCharCode(formula));
    }
    document.getElementById('resultadoD').innerHTML = result;
}

const clear = () =>{
    document.getElementById('clear').innerHTML = null;
    
   // document.getElementById('mensajeC').reset();
}

const selectCipher = () =>{
    const hide = document.getElementById('Page1');
    const show = document.getElementById('Page2');
    hide.style.display = 'none';
    show.style.display = 'block';
}

const selectDescipher = () =>{
    const hide = document.getElementById('Page1');
    const show = document.getElementById('Page4');
    hide.style.display = 'none';
    show.style.display = 'block';
}

const menssageCipher = () =>{
    const hide = document.getElementById('Page2');
    const show = document.getElementById('Page3');
    hide.style.display = 'none';
    show.style.display = 'block';
}

const menssageDescipher = () =>{
    const hide = document.getElementById('Page4');
    const show = document.getElementById('Page5');
    hide.style.display = 'none';
    show.style.display = 'block';
}

const pageStarD = () =>{
    const hide = document.getElementById('Page5');
    const show = document.getElementById('Page1');
    hide.style.display = 'none';
    show.style.display = 'block';
}

const pageStarC = () =>{
    const hide = document.getElementById('Page3');
    const show = document.getElementById('Page1');
    hide.style.display = 'none';
    show.style.display = 'block';
}
