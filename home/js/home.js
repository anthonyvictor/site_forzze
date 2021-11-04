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
addFirstItem = function(cor, texto, subtexto, img){
    let item = document.createElement('li')
    item.classList.add('item')
    let div = document.createElement('div')
    let span = document.createElement('span')

    let txt = document.createElement('label')
    txt.innerHTML = texto



    // let a = document.createElement('a')
    // a.href = '/home/home.html'
    // a.innerHTML = 'Adquira já ->'

    let sub = document.createElement('p')
    sub.innerHTML = subtexto

    item.style.backgroundColor = cor
    let imagem = document.createElement('img')
    imagem.className = 'imgItem'
    imagem.src = img
    div.appendChild(txt)
    div.appendChild(sub)
    item.appendChild(div)
    span.appendChild(imagem)
    item.appendChild(span)
    lista.appendChild(item)

    console.log(item)
}

addFirstItem('#FFC86B','Moda Verão', 'Confira as tendências mais quentes!', '/home/images/Croptop_800x.png')
addFirstItem('#E8A4A2','Moda Outono', 'Chuva chegando? Não se preocupe!','/home/images/Croptop6_800x.png')
addFirstItem('#A2D6E8','Moda Inverno', 'Vai um frio aí? Dá uma olhadinha!','/home/images/Croptop5_800x.png')


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide-container");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}



function increase_brightness(hex, percent){
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, '');

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if(hex.length == 3){
      hex = hex.replace(/(.)/g, '$1$1');
  }

  var r = parseInt(hex.substr(0, 2), 16),
      g = parseInt(hex.substr(2, 2), 16),
      b = parseInt(hex.substr(4, 2), 16);

  return '#' +
     ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
     ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
     ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}










// let btnMenu = document.getElementById('btmenu')
// console.log(btnMenu)

// btnMenu.addEventListener('click', function(){
//     const nav = document.getElementById('nav')
//     nav.classList.add('active')
// })



