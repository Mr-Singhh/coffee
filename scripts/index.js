let totaldata = JSON.parse(localStorage.getItem("alldetails"))

let url = " https://masai-mock-api.herokuapp.com/coffee/menu";
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    // console.log(res)
    let data = res.menu.data
    console.log(data)
    data.map(function(el,i){
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.image

    let name = document.createElement("p")
    name.innerText = el.title+" "+"coffee"

    let price = document.createElement("p")
    price.innerText = el.price+" "+"rs" 

    let btn = document.createElement("button")
    btn.innerText = "Remove"

    btn.setAttribute ("id","add-to-bag")
    btn.addEventListener("click",function(){
        add(el)
    })

    div.append(img,name,price,btn)
    
    // console.log(img)

    let coffee = document.getElementById("coffee").append(div)
    })  
})

function add(el,i){
    alldetails.push(el)
    let total_items = document.getElementById("total-items").append(alldetails.length)
    localStorage.setItem("alldetails",JSON.stringify(alldetails))
}