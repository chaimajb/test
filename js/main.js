
/*Love logo */
let liked = document.getElementsByClassName("fa-heart")
for (let heart of liked) {
    heart.addEventListener("click", function () {
        heart.classList.toggle("fa-heart-click")
    })
}

/**total price calculation */
function TotalPriceUpdate(){
  var allitem = document.getElementsByClassName("cart-items-container")[0]
  var itemrow = allitem.getElementsByClassName("item-cart")
  var total =0 
  for (var i=0; i<itemrow.length; i++){
    var cart= itemrow[i]
    var PriceItem = cart.getElementsByClassName("uprice")[0]
    var quantity = cart.getElementsByClassName("item-quatity")[0]
    console.log(PriceItem,quantity)
    price = parseFloat(PriceItem.innerText.replace('dt',''))
    var qt = quantity.value
    total = total + (price * qt)
    console.log(total)
  }
   return(document.getElementsByClassName('tot')[0].innerText = (total + 'dt'))  
}

/*add and delet qte */
let increase = document.querySelectorAll(".btn-success");
console.log("increase", increase);
let decrease = document.querySelectorAll(".btn-secondary");
console.log("decrease:", decrease);
for (let i = 0; i < increase.length; i++) {
  decrease[i].addEventListener("click", function () {
    decrease[i].previousElementSibling.value > 0
    ? decrease[i].previousElementSibling.value--
    : alert ("you can't get under zero items");
    TotalPriceUpdate()
  })
    increase[i].addEventListener("click", function(){
    increase[i].nextElementSibling.value++
    TotalPriceUpdate()
  })
  
}

/*Delete Item */
var removeitem = document.getElementsByClassName('btn-outline-danger')
console.log(removeitem)
for (var i=0; i<removeitem.length; i++){
  var button = removeitem[i]
  button.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove() 
    TotalPriceUpdate()
  })
}






