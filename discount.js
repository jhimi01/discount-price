let actualprice = document.getElementById("actual-price");
let discountBtn = document.getElementById("discount-btn");
let discountpricePAY = document.getElementById("dis-price");
let discountinput = document.getElementById("discount-input");
discountpricePAY.innerText = actualprice.innerText;

discountinput.addEventListener("keyup", () => {
  if (discountinput.value === "DISC30") {
    discountBtn.removeAttribute("disabled");
    discountBtn.style.color = "black";
    discountBtn.style.cursor = "pointer";

discountBtn.addEventListener("click", () => {
    let discount =
      parseFloat(actualprice.innerText) -
      (30 / 100) * parseFloat(actualprice.innerText);
    discountpricePAY.innerText = discount;
    discountinput.value = "";
    discountBtn.setAttribute("disabled", true);
    discountBtn.style.color = "";
    discountBtn.style.cursor = "";
    discountinput.value = '';
  });
  


  }else{
      discountBtn.setAttribute("disabled", true);
      discountBtn.style.color = "";
      discountBtn.style.cursor = "";
    } 
     
});



// discountBtn.addEventListener('click', () =>{
//     let discount = parseFloat(actualprice.innerText) - ((30/100) * parseFloat(actualprice.innerText));
//     discountpricePAY.innerText = discount;
//     console.log(typeof discount);
// });
