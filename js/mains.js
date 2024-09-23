const form_01 = document.getElementById('form_01');


function validaCampo(campo_a, campo_b) {
    let ress;
    if (campo_b > campo_a) {
        ress = true;
    } else if (campo_b < campo_a) {
        ress = false;
    } else {
        ress = false;

    }
    return ress;
}

form_01.addEventListener('submit', function (e) {
    e.preventDefault();
    const campo_a = document.getElementById('campo_a').value;
    const campo_b = document.getElementById('campo_b').value;
    const mensagem = document.querySelector('.mensagem');
    if ((campo_a == '') || (campo_b == '')) {
        alert('É necessário preencher todos os campo')
        window.location = '';
    } else if (campo_a == campo_b) {
        alert('Os campos são iguais')
        window.location = '';
    }
    let teste = validaCampo(campo_a, campo_b)
    if (teste) {
        console.log('OK')
        mensagem.style.display = 'block';
        mensagem.style.color = '#008000';
        mensagem.innerHTML = 'Formulário válido: Campo B: > A';
        document.getElementById('campo_a').value = '';
        document.getElementById('campo_b').value = '';
        campo_b.value = '';
    } else {
        console.log('erro')
        mensagem.style.display = 'block';
        mensagem.style.color = '#ff0000';
        mensagem.innerHTML = 'Formulário inválido: B < A';
        document.getElementById('campo_a').value = '';
        document.getElementById('campo_b').value = '';
        // alert('O campo A devbe ser maior que o campo B');
    }
    console.log('campo a ' + campo_a)
    console.log('campo b ' + campo_b)
})