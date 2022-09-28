var hearts = document.getElementsByClassName("fa-heart");

for (var i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    var btnClicked = event.target;
    btnClicked.classList.toggle("change");
  });
}


//add
var add = document.getElementsByClassName("btn_add");

for (var i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    var btnClick = event.target;
    var val_qty = parseFloat(btnClick.previousElementSibling.innerHTML);
    val_qty++;
    btnClick.previousElementSibling.innerHTML = val_qty;
    var prix = parseFloat( btnClick.parentElement.previousElementSibling.children[1].children[1].innerText.replace('€','')
    );
    console.log(typeof prix)
    var result = prix * val_qty;

    btnClick.parentElement.nextElementSibling.children[0].children[0].innerHTML = result.toFixed(2) ;
    somme()
  });
}
//min
var min = document.getElementsByClassName("btn-min");

for (var i = 0; i < min.length; i++) {
  min[i].addEventListener("click", function () {
    var btnClick = event.target;
    var val_qty = parseFloat(btnClick.nextElementSibling.innerHTML);
    val_qty--;
    var prix = parseFloat(
      btnClick.parentElement.previousElementSibling.children[1].children[1].innerText.replace('€','')
    
    );
    if (val_qty < 1) {
      btnClick.nextElementSibling.innerHTML = 1;
      var result = prix;
    } else {
      btnClick.nextElementSibling.innerHTML = val_qty;
      var result = prix * val_qty;
    }

    btnClick.parentElement.nextElementSibling.children[0].children[0].innerHTML = result.toFixed(2);
    somme()
  
  });
}
 //somme
 
 function somme() {
  var total = document.getElementById("Prix_total");
  var prices = document.getElementsByClassName("prix");
  var prix=document.getElementById("som_total");
  var total_cart = 0;
  for (var i = 0; i < prices.length; i++) {

    total_cart += Number(prices[i].innerHTML);
  }
  total.innerHTML = total_cart.toFixed(2);
  prix.innerHTML=(total_cart-10).toFixed(2);
}
//remove

var rmv = document.getElementsByClassName("Remove");

for (let i = 0; i < rmv.length; i++) {
  rmv[i].addEventListener("click", function(event){
    var btnClick = event.target;
    btnClick.parentElement.parentElement.remove();
  });
}
