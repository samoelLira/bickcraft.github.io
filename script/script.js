const menuMobile = document.querySelector('#menu-mobile')
const menuP = document.getElementById('navP')

function ativarMenu(){
    menuP.classList.toggle('active')
}

menuMobile.addEventListener('click', ativarMenu)


//mune ativo
const linksMenu = document.querySelectorAll('#menu a') 

function ativarMenu1(item){
    if(location.href.includes(item.href)){
        item.classList.add('active')
    }
}

linksMenu.forEach(ativarMenu1);

//perguntas abrir

const perguntas = document.querySelectorAll('#seguros dt button')

function abrir(item){

    function abrirPergunta(event){
        const ele = event.currentTarget
        const controls = ele.getAttribute('aria-controls')
        const seleçao = document.getElementById(controls)
        
        seleçao.classList.toggle('active')
        
        const ativo = seleçao.classList.contains('active')
        ele.setAttribute('aria-expanded', ativo) 
    }

    item.addEventListener('click', abrirPergunta)
}

perguntas.forEach(abrir)

//galeria de imagens

const imgPrincipal = document.querySelector('#img-principal img')
const img = document.querySelectorAll('.bicicleta-p-galeria > img')

function verificar(item){
    function mudarFoto(event){
        for(let i = 0; i < img.length; i++){
            img[i].style.border = '1px solid var(--cor-11)'
        }
        event.currentTarget.style.border = '1px solid var(--cor-0)'
        imgPrincipal.src = event.currentTarget.src
        imgPrincipal.alt = event.currentTarget.alt
    }
    item.addEventListener('click', mudarFoto)
}

img.forEach(verificar)

//ativa seleções automaticas do orçamento

const parametros = new URLSearchParams(location.search)

function ativarProduto(item){
    elemento = document.getElementById(item)
    if(elemento){
        elemento.checked = true
    }
}
parametros.forEach(ativarProduto)

//ativar animação

if(window.SimpleAnime){
    new SimpleAnime()
}
