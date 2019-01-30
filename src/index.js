const encode = () =>{
    const offSet = document.getElementById('posicionesC').value;
    const letter = document.getElementById('mensajeC').value;
    let result = "";
    for(let i=0; i<letter.length; i++){
        const nletra = letter.charCodeAt(i);
        const formula = ((nletra - 65 + offSet) % 26 )+ 65;
        result = result + (String.fromCharCode(formula));
    }
    document.getElementById('resultado').innerHTML = result;
}

const decode = () =>{
    const offSet = 4;
    const word = 'ABC';
    for(let i=0; i<word.length; i++){
        const nletra = word.charCodeAt(i);
        const formula = ((nletra + 65 - offSet) % 26) - 65;
        console.log(String.fromCharCode(formula));
    }
}
console.log(decode());

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
