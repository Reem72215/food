var products = document.querySelectorAll('.primarybtn')
var myBtn = document.getElementsByClassName('primarybtn')
var myTotal = document.getElementById('total')
var btnPrice = document.querySelector('.btn-price')
var TotalPrice = 0
var showPrice = document.getElementById('showPrice')




products.forEach(function(item) {
    item.addEventListener('click', function() {
        TotalPrice += +(item.getAttribute('price'));
        myTotal.innerHTML += item.getAttribute('foodName') +" "+item.getAttribute('price')+" "+"S.P"+"<br>";
    })
})

function Draw(){
    showPrice.innerHTML = (TotalPrice)+" "+"S.P";
}

btnPrice.onclick = Draw;


