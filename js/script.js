function onSearch(){
    const onFind = document.getElementById('searchInput');


    onFind.innerHTML = `<input type="text" id="myInput" placeholder=" Digite e pressione enter..." style="display: block;">`;
}
function offSearch(){
    const offFind = document.getElementById('searchInput');


    offFind.innerHTML = `<input type="text" id="myInput" style="display: none;">`;
}