
$(document).ready(function () {
    // Adicione rolagem suave a todos os links
    $("a").on('click', function (event) {

        // Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
        if (this.hash !== "") {
            // Impedir o comportamento padrão do clique de âncora
            event.preventDefault();

            // Armazenar hash
            var hash = this.hash;

            // Usando o método animate() do jQuery para adicionar rolagem de página suave
            // O número opcional (800) especifica o número de milissegundos necessários para rolar até a área especificada
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Adicionar hash (#) ao URL quando terminar de rolar (comportamento de clique padrão)
                window.location.hash = hash;
            });
        } // Terminar se
    });
});


// Validação de email

const emailForm = document.querySelector('#emailForm');
const emailInput = document.querySelector('#emailInput');
const msg = document.querySelector('#message');

emailForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value;

    const isValid = validateEmail(email);

    if (isValid) {
        msg.textContent = "E-mail válido!";
        msg.style.color = "green";
        this.submit();
    } else {
        msg.textContent = "E-mail inválido!";
        msg.style.color = "red";
    }
});

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
};

// Mostrar/esconder botão quando rolar
window.onscroll = function () {
    const botao = document.getElementById("btnTopo");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
};

// Subir lentamente ao clicar
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnTopo");

    botao.addEventListener("click", () => {
        const subirLento = setInterval(() => {
            const pos = window.pageYOffset;

            if (pos > 0) {
                window.scrollBy(0, -30); // mais lento
            } else {
                clearInterval(subirLento);
            }
        }, 10); // mais suave
    });
});
