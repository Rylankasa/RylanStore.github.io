var index = 0;
var image = ["images/banner1.webp","images/banner2.webp","images/banner3.webp"];
var slideShow = document.getElementById("image");

function Next(){
    index++;
    if(index > image.length - 1){
        index = 0;
    }
    slideShow.style.opacity = 0;
    setTimeout(function () {
        slideShow.src = image[index];
        slideShow.style.opacity = 1;
    }, 400);
}
function Back(){
    index--;
    if(index < 0){
        index = image.length - 1;
    }
    slideShow.style.opacity = 0;
    setTimeout(function () {
        slideShow.src = image[index];
        slideShow.style.opacity = 1;
    }, 400);
}
let a = 0;
function Auto(){
    a = setInterval(function(){
        Next();
    }, 1000)
}
function Pause(){
    clearInterval(a);
}

const btn = document.querySelectorAll(".shop button");
// console.log(btn);
btn.forEach(function(button,index){
// console.log(btn);
button.addEventListener( 'click',function(event){
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector(".namePC").innerText
    var productPrice = product.querySelector("span").innerHTML
    // console.log(productImg,productName,productPrice);
    addcart(productImg,productName,productPrice)
})
})
function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    var trcontent = '<main class="items"><img src="'+productImg+'" alt=""><div class="nameprice"><nav class="name">'+productName+'</nav><nav class="price">'+productPrice+'<sup>đ</sup></nav></div><i class="fa-regular fa-circle-xmark" style="color: gainsboro; font-size: 20px;"></i></main>'
    addtr.innerHTML = trcontent 
    var cartTable = document.querySelector('.producct')
    cartTable.append(addtr)
    carttotal()
    Deletecart()
}

function carttotal(){
    var cartItem = document.querySelectorAll("main")
    var totalC = 0
    for (var i=0;i<cartItem.length;i++){
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        var productPrice = parseFloat(productPrice);
        priceTotalA = productPrice*1000000
        totalC = totalC + priceTotalA

    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartTotalB = document.querySelector(".icons span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
    cartTotalB.innerHTML = totalC.toLocaleString('de-DE');
}

function Deletecart(){
    var cartItem = document.querySelectorAll("main")
    for( var $i=0;$i<cartItem.length;$i++ ){
        var productT = document.querySelectorAll(".fa-circle-xmark")
        productT[$i].addEventListener('click', function (event){
            var cartDelete =  event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
    })

    }
}

const cartbtn = document.querySelector(".fa-heart");
let isRed = true;

cartbtn.addEventListener("click", function() {
    if (isRed) {
        cartbtn.style.color = "red";
        isRed = false;
    } else {
        cartbtn.style.color = "#fff";
        isRed = true;
    }
});

