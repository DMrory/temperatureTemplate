//temperature conversion program

const textbox = document.getElementById(`textbox`);
const tofarenheit = document.getElementById(`tofarenheit`);
const tocelcious = document.getElementById(`tocelcious`);
const result = document.getElementById(`result`);
let temp;

function convert(){
    if(tofarenheit.checked){

    }
    else if(tocelcious.checked){

    }
    else{
        result.textContent = `select a unit`;
    }
}