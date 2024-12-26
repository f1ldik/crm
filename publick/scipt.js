let link = document.querySelectorAll(".a2")
let button = document.querySelector(".btn")
let priceAll = document.querySelectorAll("input")
let sum=0;
for(let i=0; i < link.length; i++){



    link[i].addEventListener("click", function(event){
      event.preventDefault()  


      let key =link[i].getAttribute("data-order")+' '+link[i].getAttribute("data-price")+' ' + priceAll[i].value

      let value = link[i].getAttribute("data-price")*priceAll[i].value
      localStorage.setItem(key, value)
    })
}
let modal = document.getElementById("modal")
let btn = document.getElementById("mbtn")
let span = document.getElementById("close")
let check = document.querySelector(".check")
let finalcheck = document.querySelector(".final")
btn.onclick = function(){
  let summa=0;
  modal.style.display = "block";
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    let tegP = document.createElement('p')
    tegP.innerHTML=`${key}: ${localStorage.getItem(key)}`
    // console.log(tegP)
    check.append(tegP)
    summa+=Number(localStorage.getItem(key))
    
  }
  let final = document.createElement("span")
    final.innerHTML = summa
    console.log(final)
    finalcheck.append(final)
}
span.onclick = function() {
  modal.style.display = "none";
}
button.onclick = function() {

  let str = ""
  let finalsum = 0
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    str +=`${key}: ${localStorage.getItem(key)}`
    finalsum+=Number(localStorage.getItem(key))
    
  }
  
  CreateUser(str,finalsum)
}


async function CreateUser(z, s) {

  const response = await fetch("/order/add", {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
          order: z,
          sum: s
      })
  });
  if (response){
      // console.log(response["message"])
    localStorage.clear()
     
        modal.style.display = "none";
        check.innerHTML = ""
  
      alert("заказ завершен")
  }
}




