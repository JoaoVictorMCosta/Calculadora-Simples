function insert(num){
    var numero= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function erase(){
    document.getElementById('resultado').innerHTML= "";
}

function clean(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function result(){
    var result = document.getElementById('resultado').innerText;
    if(result)
    {
        document.getElementById('resultado').innerHTML= eval(result);
    }
    else{
        document.getElementById('resultado').innerHTML = "NaN";
    }
}