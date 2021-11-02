var jumbotronTitle = document.getElementById("jumbotron-title")
jumbotronTitle.innerHTML='Toda loja com'

var jumbotronTitle = document.getElementById("jumbotron-subtitle")
jumbotronTitle.innerHTML='50% OFF'

function clicknav(e){
    let l = document.getElementsByClassName('nav-link')
    Array.prototype.forEach.call(l, function(x) {
        if(x.classList.contains('active')){
            x.classList.remove('active')
        }
    });
    e.classList.add('active')
}

const lista = document.getElementById('lista')
addFirstItem = function(cor, texto, img){
    let item = document.createElement('li')
    item.classList.add('item')
    let div = document.createElement('div')

    let txt = document.createElement('label')
    txt.innerHTML = texto

    let a = document.createElement('a')
    a.href = '/home/home.html'
    a.innerHTML = 'Adquira já ->'

    item.style.backgroundColor = cor
    let imagem = document.createElement('img')
    imagem.src = img
    div.appendChild(txt)
    div.appendChild(a)
    item.appendChild(div)
    item.appendChild(imagem)

    lista.appendChild(item)

    console.log(item)
}

addFirstItem('#e3d768','Moda Verão','/home/images/Croptop_800x.png')
addFirstItem('#ff00aa','Moda Outono','/home/images/Croptop6_800x.png')
addFirstItem('#3471eb','Moda Inverno','/home/images/Croptop5_800x.png')

// let btnMenu = document.getElementById('btmenu')
// console.log(btnMenu)

// btnMenu.addEventListener('click', function(){
//     const nav = document.getElementById('nav')
//     nav.classList.add('active')
// })



