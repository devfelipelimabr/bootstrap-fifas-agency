/*-FUNÇÃO PARA REVELAR O CAMPO PESQUISA-*/
function onSearch() {
    const onFind = document.getElementById('searchInput');

    onFind.innerHTML = `<input type="text" id="myInput" placeholder=" Digite e pressione enter..." style="display: block;">`;
}
function offSearch() {
    const offFind = document.getElementById('searchInput');

    offFind.innerHTML = `<input type="text" id="myInput" style="display: none;">`;
}

/*-FUNÇÃO PARA REVELAR INFO DOS PROJETOS-*/
function onP1() {
    const pic1 = document.getElementById('p1');

    pic1.innerHTML = `<img src="img/p1.jpg" alt="imagem do projeto"><h3>Museu de arte moderna</h3>`
}
function onP2() {
    const pic2 = document.getElementById('p2');

    pic2.innerHTML = `<img src="img/p2.jpg" alt="imagem do projeto"><h3>Residencial AlphaVille</h3>`
}
function onP3() {
    const pic3 = document.getElementById('p3');

    pic3.innerHTML = `<img src="img/p3.jpg" alt="imagem do projeto"><h3>Montserrat studio</h3>`
}
function onP4() {
    const pic4 = document.getElementById('p4');

    pic4.innerHTML = `<img src="img/p4.jpg" alt="imagem do projeto"><h3>Clinica Grazza</h3>`
}
function onP5() {
    const pic5 = document.getElementById('p5');

    pic5.innerHTML = `<img src="img/p5.jpg" alt="imagem do projeto"><h3>Residencial Velaskez</h3>`
}
function onP6() {
    const pic6 = document.getElementById('p6');

    pic6.innerHTML = `<img src="img/p6.jpg" alt="imagem do projeto"><h3>Buzios Grand Hotel</h3>`
}

/*-FUNÇÃO PARA ESCONDER INFO DOS PROJETOS-*/
function offP() {
    const img1 = document.getElementById('p1');
    const img2 = document.getElementById('p2');
    const img3 = document.getElementById('p3');
    const img4 = document.getElementById('p4');
    const img5 = document.getElementById('p5');
    const img6 = document.getElementById('p6');

    img1.innerHTML = `<img src="img/p1.jpg" alt="imagem do projeto"><h3 style="display: none;"></h3>`;
    img2.innerHTML = `<img src="img/p2.jpg" alt="imagem do projeto"><h3 style="display: none;"></h3>`;
    img3.innerHTML = `<img src="img/p3.jpg" alt="imagem do projeto"><h3 style="display: none;"></h3>`;
    img4.innerHTML = `<img src="img/p4.jpg" alt="imagem do projeto"><h3 style="display: none;"></h3>`;
    img5.innerHTML = `<img src="img/p5.jpg" alt="imagem do projeto"><h3 style="display: none;"></h3>`;
    img6.innerHTML = `<img src="img/p6.jpg" alt="imagem do projeto"><h3 style="display: none;"></h3>`;
}