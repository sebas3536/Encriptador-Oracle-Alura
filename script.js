document.addEventListener("DOMContentLoaded", function () {
    const heroTextarea = document.querySelector('.hero-textarea');
    const botonEncriptar = document.querySelector('.botonEncriptar');
    const botonDesencriptar = document.querySelector('.botonDesencriptar');
    const botonCopiar = document.querySelector('.boton-copiar');
    const resultadoTexto = document.querySelector('.resultado-texto');
    const noresultado = document.querySelector('.noresultado');
    const noresultadoImg = document.querySelector('.noresultado-img');
    const noresultadoTitulo = document.querySelector('.noresultado-titulo');
    const noresultadoTexto = document.querySelector('.noresultado-texto');
    const result = document.querySelector('.resultado');
    const noresult = document.querySelector('.noresultado');
    const resultText = document.querySelector('.resultado-texto');

    botonEncriptar.addEventListener('click', encriptar);
    botonDesencriptar.addEventListener('click', desencriptar);
    botonCopiar.addEventListener('click', copiar);

    function encriptar() {
        const texto = heroTextarea.value.toLowerCase();
        const textoEncriptado = texto.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        //heroTextarea.value = textoEncriptado;
        botonCopiar.style.display = "block";
        resultadoTexto.textContent = textoEncriptado;
        changeClasses();
    }

    function desencriptar() {
        const textoEncriptado = heroTextarea.value.toLowerCase();
        const textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        //heroTextarea.value = textoDesencriptado;
        botonCopiar.style.display = "block";
        resultadoTexto.textContent = textoDesencriptado;
        changeClasses();
    }

    function copiar() {
        const contenido = resultadoTexto.textContent;
        navigator.clipboard.writeText(contenido);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: 'rgba(255, 255, 240)',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Copiado con éxito'
        })
    }   

    function mostrarResultado() {
        if (heroTextarea.value.trim() === '') {
            noresultado.style.display = 'block';
            noresultadoImg.style.display = 'block';
            noresultadoTitulo.style.display = 'block';
            noresultadoTexto.style.display = 'block';
            resultadoTexto.textContent = '';
            botonCopiar.style.display = 'none';
        } else {
            noresultado.style.display = 'none';
            resultadoTexto.style.display = 'block';
        }
        changeClasses(); // llamamos a la función changeClasses para actualizar las clases de los elementos
    }

    function changeClasses() {
        let noresult = document.querySelector('.noresultado');
        let result = document.querySelector('.resultado');
        let resultText = document.querySelector('.resultado-texto');

        if (resultText.textContent.trim().length === 0) {
            result.classList.add('hidden');
            noresult.classList.remove('hidden');
        }
        else {
            result.classList.remove('hidden');
            noresult.classList.add('hidden');
        }
    }
})      