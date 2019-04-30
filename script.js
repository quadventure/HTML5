// jquery
$(document).ready(function () {
    
//window.onload = function () {
    alert ("jquery loaded");
    // selector p con querySelector

    //const para = document.querySelector('p');

    //para.addEventListener('click',updateName);

    // selector p con jquery

// ??? programa todos los <p>

// ???    $('p').click (alert ("click en p"));

    $('#topheaderp').click (updateName);

    const para = document.querySelector('p');

//    para.addEventListener('click',updateName);

    // selector id topheader

    const topHeader = document.querySelector('#topheader');

    topHeader.addEventListener('click',createP);

    // selector id artigos

    const artigo = document.querySelector('#artigo1p');

    artigo.addEventListener('click',createA);

    const artigo2 = document.querySelector('#artigo2p');

    artigo2.addEventListener('click',createA2);

    const artigo3 = document.querySelector('#artigo3p');

    artigo3.addEventListener('click',createA3);

    function createA (){
        let name = prompt('Ingresa más texto');
        let fontcolor = prompt('Ingresa font color');

        var pArtigo = document.createElement('p');

        pArtigo.textContent = name;

        pArtigo.style.color = fontcolor;

        artigo.appendChild(pArtigo);
    }

    function createA2 (){
        let name = prompt('Ingresa más texto');

        var pArtigo2 = document.createElement('p');

        var parent2 = artigo2.parentNode;

        pArtigo2.textContent = name;

//        artigo2.appendChild(pArtigo2);

        parent2.insertBefore(pArtigo2, artigo2);

    }

    function createA3 (){
        let name = prompt('Ingresa más texto');

        var pArtigo3 = document.createElement('p');

        var parent3 = artigo3.parentNode;

        pArtigo3.textContent = name;

//        artigo3.appendChild(pArtigo3);

        parent3.insertBefore(pArtigo3, artigo3.nextSibling);
    }

    function updateName(){
        let name = prompt('Ingresa un nuevo texto');
        let size = prompt('Tamanho');
        let color = prompt('Background Color');

        para.innerHTML = name + " - CLICK TO CHANGE TEXT, SIZE CSS RULE HEADER FOOTER (innerHTML)";
//        para.textContent = name + " - CLICK TO CHANGE TEXT, SIZE CSS RULE HEADER FOOTER (textContent)";
        para.style.fontSize = size;
        console.log (document.styleSheets);

        var css = document.createElement("style");
        css.type="text/css";
        css.innerHTML="footer, header { background-color: " + color + " }";
        document.body.appendChild(css);
    }

    function createP (){
        let name = prompt('Ingresa más texto');

        var pHeader = document.createElement('p');

        var parent = topHeader.parentNode;

        pHeader.textContent = name;

// insert inside the current element

//        topHeader.appendChild(pHeader);

// insert before the current element

//        parent.insertBefore(pHeader, topHeader);

// insert after the current element

        parent.insertBefore(pHeader, topHeader.nextSibling);
    }


});


function execute_js () {
document.querySelector('h1').addEventListener('click', ()=> {
        document.body.style.background = 'green';
    })
}

function display_msg () {
    document.write('alert js');
    document.body.style.background = 'blue';

}