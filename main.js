// ================================
// 1. SAUDAÇÃO DINÂMICA POR HORÁRIO
// ================================

function saudacaoDinamica() {
    const hora = new Date().getHours()
    let saudacao = ""

    if (hora >= 5 && hora < 12) {
        saudacao = "☀️ Bom dia! Veja como posso ajudar você."
    } else if (hora >= 12 && hora < 18) {
        saudacao = "🌤️ Boa tarde! Veja como posso ajudar você."
    } else {
        saudacao = "🌙 Boa noite! Veja como posso ajudar você."
    }

    // Pega o parágrafo da seção sobre e troca o texto
    const paragrafoSobre = document.querySelector("#sobre p")
    paragrafoSobre.textContent = saudacao
}

saudacaoDinamica()


// ================================
// 2. MENU HAMBURGUER PARA CELULAR
// ================================

// Primeiro adicione este botão no HTML (veja abaixo)
const btnMenu = document.getElementById("btn-menu")
const nav = document.querySelector("nav")

if (btnMenu) {
    btnMenu.addEventListener("click", function() {
        nav.classList.toggle("menu-aberto")
    })
}


// ================================
// 3. ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const sections = document.querySelectorAll("section")

const observador = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, { threshold: 0.1 })

sections.forEach(function(section) {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observador.observe(section)
})


// ================================
// 4. ANO AUTOMÁTICO NO RODAPÉ
// ================================

const anoAtual = new Date().getFullYear()
const rodape = document.querySelector("footer p")
rodape.textContent = 
    "© " + anoAtual + " Luiz Fernando — Todos os direitos reservados"

console.log('Meu primeiro comando no console')

//================================
// 5. MOSTRANDO A CIDADE
//================================

function mostrarCidade(){
    console.log('Desenvolvedor de Alfenas-MG')
}

mostrarCidade();

// ================================
// 6. FORMULÁRIO DE CONTATO
// ================================

// Cole suas chaves do EmailJS aqui:
const EMAILJS_SERVICE_ID  = "service_fmzcj2i"
const EMAILJS_TEMPLATE_ID = "template_i6w40tu"
const EMAILJS_PUBLIC_KEY  = "R-37qnqLZ_rQnHrWz"

// Inicializa o EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

// Pega o formulário
const formulario = document.getElementById("formulario-contato")
const btnEnviar  = document.getElementById("btn-enviar")
const msgSucesso = document.getElementById("mensagem-sucesso")
const msgErro    = document.getElementById("mensagem-erro")

// Escuta o evento de submit
formulario.addEventListener("submit", function(evento) {

    // Impede o comportamento padrão (recarregar a página)
    evento.preventDefault()

    // Desabilita o botão e muda o texto
    btnEnviar.disabled = true
    btnEnviar.textContent = "Enviando..."

    // Esconde mensagens anteriores
    msgSucesso.style.display = "none"
    msgErro.style.display    = "none"

    // Monta os dados do formulário
    const dados = {
        nome:      document.getElementById("nome").value,
        email:     document.getElementById("email").value,
        telefone:  document.getElementById("telefone").value,
        servico:   document.getElementById("servico").value,
        mensagem:  document.getElementById("mensagem").value
    }

    // Envia o e-mail
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, dados)
        .then(function() {
            // Sucesso
            msgSucesso.style.display = "block"
            formulario.reset()
            btnEnviar.disabled    = false
            btnEnviar.textContent = "Enviar Mensagem"

            // Rola até a mensagem de sucesso
            msgSucesso.scrollIntoView({ behavior: "smooth" })
        })
        .catch(function(erro) {
            // Erro
            console.log("Erro EmailJS:", erro)
            msgErro.style.display = "block"
            btnEnviar.disabled    = false
            btnEnviar.textContent = "Enviar Mensagem"
        })
})