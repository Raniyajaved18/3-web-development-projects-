var products = [
    { name: "white table", headline: "exotic white", price: "10,000", image: "https://plus.unsplash.com/premium_photo-1711305772086-d45053d4bb69?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "yellow bedroom", headline: "exotic yellow", price: "20,000", image: "https://images.unsplash.com/photo-1709418354352-a1b6283c77d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "traditional room", headline: "traditional japanese room", price: "15,000", image: "https://images.unsplash.com/photo-1711465408866-952ef8c4598c?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "beautiful white room", headline:"beautiful exotic white room", price:"25,000", image:"https://plus.unsplash.com/premium_photo-1676968002784-a12d205a3d4c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];
var popular = [
    { name: "white table", headline: "exotic white", price: "10,000", image: "https://plus.unsplash.com/premium_photo-1711305772086-d45053d4bb69?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "yellow bedroom", headline: "exotic yellow", price: "20,000", image: "https://images.unsplash.com/photo-1709418354352-a1b6283c77d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "traditional room", headline: "traditional japanese room", price: "15,000", image: "https://images.unsplash.com/photo-1711465408866-952ef8c4598c?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "beautiful white room", headline:"beautiful exotic white room", price:"25,000", image:"https://plus.unsplash.com/premium_photo-1676968002784-a12d205a3d4c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

var cart = [];


function addproduct() {
    var clutter = ""
products.forEach(function (products,index){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    
        <img class="w-full h-full object-cover" src="${products.image}" />

    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${products.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${products.headline}</h3>
                <h4 class="font-semibold mt-2">&#x20B9;${products.price}</h4>
            </div>
            <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
            <i data-index="${index}" class="add ri-add-line"></i></button>
        </div>
    </div>
</div>`;
})
    
document.querySelector(".products").innerHTML=clutter
}

function addpopularproducts() {
    var clutter = "";
    popular.forEach(function (product) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#x20B9;${product.price}</h4>
        </div>
    </div>`;
    })
    document.querySelector(".populars").innerHTML = clutter
}

function addToCart() {
    document.querySelector(".products")
        .addEventListener("click", function (details) {
            if (details.target.classList.contains('add')) {
                  cart.push(products[details.target.dataset.index])  
            }
            // alert("product added");
    })
}


addpopularproducts();
addproduct();
addToCart()