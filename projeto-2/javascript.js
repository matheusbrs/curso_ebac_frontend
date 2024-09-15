const form = document.getElementById('form-numerico');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById('conteudo_a').value);
    const b = parseFloat(document.getElementById('conteudo_b').value);
    const resultado = document.querySelector('.retorno_resultado');

    if (isNaN(a) || isNaN(b)) {
        resultado.innerHTML = "Favor digitar um valor valido do lado A e B para que possamos fazer a comparação!"
        document.querySelector('.retorno_resultado').style.background = "red";
        return;
    }



    if (a < b) {
        resultado.innerHTML = "Parábens você acertou, o maior lado digitado foi o B ";
        document.querySelector('.retorno_resultado').style.background = "";
        return;

    } else {
        resultado.innerHTML = "Infelizmente você errou, tente novamente!"
        document.querySelector('.retorno_resultado').style.background = "red";


    }
})