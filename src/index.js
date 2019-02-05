const datesEncode = () =>{
    const offSet = parseInt(document.getElementById('posicionesC').value);
    const letter = document.getElementById('mensajeC').value;
    const result = window.cipher.encode(offSet, letter);
    document.getElementById('resultadoC').innerHTML = result;
};
 document.getElementById('enviarP3').addEventListener('click',datesEncode);

const datesDecode = () =>{
    const offSet = parseInt(document.getElementById('posicionesD').value);
    const letter = document.getElementById('mensajeD').value;
    const result = window.cipher.decode(offSet, letter);
    document.getElementById('resultadoD').innerHTML = result;
};
document.getElementById('enviarP4').addEventListener('click',datesDecode);

const selectCipher = () =>{
    const hide = document.getElementById('Page1');
    const show = document.getElementById('Page2');
    hide.style.display = 'none';
    show.style.display = 'block';
};
document.getElementById('cifrar').addEventListener('click',selectCipher);

const selectDescipher = () =>{
    const hide = document.getElementById('Page1');
    const show = document.getElementById('Page4');
    hide.style.display = 'none';
    show.style.display = 'block';
};
document.getElementById('descifrar').addEventListener('click',selectDescipher);

const menssageCipher = (event) =>{
    event.preventDefault();
    const hide = document.getElementById('Page2');
    const show = document.getElementById('Page3');
    hide.style.display = 'none';
    show.style.display = 'block';
};
document.getElementById('enviarP3').addEventListener('click', menssageCipher);

const menssageDescipher = (event) =>{
    event.preventDefault();
    const hide = document.getElementById('Page4');
    const show = document.getElementById('Page5');
    hide.style.display = 'none';
    show.style.display = 'block';
};
document.getElementById('enviarP4').addEventListener('click',menssageDescipher);

const pageStarD = () =>{
    const hide = document.getElementById('Page5');
    const show = document.getElementById('Page1');
    hide.style.display = 'none';
    show.style.display = 'block';
};
document.getElementById('enviarP1D').addEventListener('click',pageStarD);

const pageStarC = () =>{
    const hide = document.getElementById('Page3');
    const show = document.getElementById('Page1');
    hide.style.display = 'none';
    show.style.display = 'block';
};
document.getElementById('enviarP1C').addEventListener('click',pageStarC);
