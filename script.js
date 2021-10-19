//queryselectors  
// const submitButtons = document.querySelector('.submit-btn');
// const productInput = document.querySelector('.product-input1');
// const priceInput = document.querySelector('.product-input2');
// const quantityInput = document.querySelector('.product-input3');
// const code = document.querySelector('.product-code');
// const hddName = document.querySelector('.hdd-name')
// const hddPrice = document.querySelector('.hdd-price')
// const hddCode = document.querySelector('.hdd-code')
// const hddQuantity = document.querySelector('.hdd-quantity')
// const submitBtnHdd = document.querySelector('.submitbtn-hdd')
// const WatchName = document.querySelector('.watch-name')
// const watchPrice = document.querySelector('.watch-price')
// const watchCode = document.querySelector('.watch-code')
// const watchQuantity = document.querySelector('.watch-quantity')
// const submitBtnWatch = document.querySelector('.submitbtn-watch')
// const tBody = document.querySelector('.t-body')
// const spanTotal = document.querySelector('.total')


var products = [
    {
        "name": "camera",
        "code": "434frett",
        "price": 20,
        "quantity": 5,
        "imageSrc": "/picture of a camera.jpg"
    },
    {
        "name": "hdd",
        "code": "434frett",
        "price": 100,
        "quantity": 5,
        "imageSrc": "/picture of a camera.jpg"
    },
    {
        "name": "wrist-watch",
        "code": "434frett",
        "price": 100,
        "quantity": 5,
        "imageSrc": "/picture of a camera.jpg"
    },
    {
        "name": "another product",
        "code": "434frett",
        "price": 20,
        "quantity": 5,
        "imageSrc": "/picture of a camera.jpg"
    },
    {
        "name": "another another product",
        "price": 20,
        "quantity": 5,
        "imageSrc": "/picture of a camera.jpg"
    },
];



//global variables
let sumTotal = 0;


//add event listeners 

// submitButtons.addEventListener('click', submit);
// // submitBtnHdd.addEventListener('click', submitHdd);
// submitBtnWatch.addEventListener('click', submitWatch);
// tBody.addEventListener('click', remove);



// //functions 
// function submit(event) {
//     //prevent the default
//     event.preventDefault()  

//     //creating a tr element
//     const selectItem = document.createElement("tr")
//     selectItem.classList.add("select-item");



//     //creating a td element 
//     const productName = document.createElement("td")
//     productName.classList.add("product-name");
//     productName.innerHTML = productInput.innerHTML


//     //creating a new td that would have the product code 
//     const productCode = document.createElement("td");
//     productCode.classList.add("product-code");
//     productCode.innerHTML = code.innerHTML;

//     //creating a new td element that would bear the quantity of the product 
//     const productQuantity = document.createElement("td");
//     productQuantity.classList.add("product-quantity");
//     productQuantity.innerHTML = quantityInput.value;
//     if (quantityInput.value === "") return alert("put a quantity value")
//      quantity = productQuantity.innerHTML;
//     // productQuantity.innerHTML


//     //creating a td element
//     const priceDiv = document.createElement('td')
//     priceDiv.classList.add('price-div')
//     priceDiv.innerHTML = priceInput.innerHTML;
//     price = priceDiv.innerhtml


//     //creating another a button element
//     const buttonElement = document.createElement('button');
//     buttonElement.classList.add('delete-button')
//     buttonElement.innerHTML = 'delete button'

//     //code to append all the dynamically created elements to the tr element
//     selectItem.appendChild(productName);
//     selectItem.appendChild(productCode);
//     selectItem.appendChild(productQuantity);
//     selectItem.appendChild(priceDiv);
//     selectItem.appendChild(buttonElement);
//     tBody.appendChild(selectItem);
//     //this is the code to make the quantity of the product automatically be set to 1 if it is left empty 


//     //this clears the quantity input after calling the code 


//     quantity = parseInt(productQuantity.innerHTML);
//     price = parseInt(priceDiv.innerHTML.replace("$", ""));
//     cameraTotal = quantity * price;
//     productQuantity.value = "";
//     grandTotal(price, quantity)
//     remove()



// }

// function submitHdd(event) {
//     event.preventDefault()

//     //creating a tr element 

//     const selectItem = document.createElement("tr")
//     selectItem.classList.add("select-item");

//     //creating a td element 
//     const diskName = document.createElement("td")
//     diskName.classList.add("hdd-name");
//     diskName.innerHTML = hddName.innerHTML



//     //creating a new td that would have the product code 
//     const productCode = document.createElement("td");
//     productCode.classList.add("product-code");
//     productCode.innerHTML = hddCode.innerHTML;

//     //creating a new td element that would bear the quantity of the product 
//     const productQuantity = document.createElement("td");
//     productQuantity.classList.add("product-quantity");
//     productQuantity.innerHTML = productQuantity.value;
  



//     //creating a td element
//     const priceDiv = document.createElement('td')
//     priceDiv.classList.add('price-div')
//     priceDiv.innerHTML = hddPrice.value;
    
    

//     //creating another a button element
//     const buttonElement = document.createElement('button');
//     buttonElement.classList.add('delete-button')
//     buttonElement.innerHTML = 'delete button'

//     //code to append all the dynamically created elements to the tr element
//     selectItem.appendChild(diskName);
//     selectItem.appendChild(productCode);
//     selectItem.appendChild(productQuantity);
//     selectItem.appendChild(priceDiv);
//     selectItem.appendChild(buttonElement);
//     tBody.appendChild(selectItem);
//     let  quantity = parseInt(productQuantity.innerHTML)
//   let  price = parseInt(priceDiv.innerHTML.replace("$", ""))
//    console.log(quantity);
//     grandTotal(price, quantity)
//     remove()
//     // if(hddQuantity.value === ''){return productQuantity.innerHTML = 1;}
//     // else{
//     //   return  hddQuantity.value = productQuantity.innerHTML
//     // }
   
// }

function displayProducts(){
    var productsContainer = document.getElementById("products-container");

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        var element = document.createElement("div");
        var name = document.createTextNode(product['name']);
        var price = document.createTextNode(product['price'].toString());
        var quantity = document.createTextNode(product['quantity'])
        var btn = document.createElement("BUTTON");   // Create a <button> element
        btn.innerHTML = "Add To Cart";  
        btn.addEventListener('click', (()=>{
            let table = document.getElementById('tableBody');
            let element = document.createElement('tr')
            let name = document.createElement('td')
            name.innerHTML= (product['name'])
            let code = document.createElement("td")
            code.innerHTML = (product.code);
            let price = document.createElement("td")
            price.innerHTML= (product['price'].toString());
            let quantity = document.createElement("td")
            quantity.innerHTML= (product['quantity'])
            let button = document.createElement("button");
            button.classList.add('delete-button')
            button.innerHTML = "delete button"
            button.addEventListener('click',(e)=>{
                const items = e.target
                if (items.className === "delete-button") {
                    const parent = items.parentElement
                    parent.remove();
                    totalPrice = 0
                    totalQuantity = 0
                    updateTotal(totalPrice,totalQuantity)
                    
                }
                
            })
            element.appendChild(name)
            element.appendChild(code)
            element.appendChild(price)
            element.appendChild(quantity)
            element.appendChild(button)
       
            table.appendChild(element);
           let  totalPrice = product.price
           let totalQuantity = product.quantity
           updateTotal(totalPrice,totalQuantity)
        
           
        
        }))

        element.appendChild(name);
        element.appendChild(price);
        element.appendChild(quantity);
        element.appendChild(btn);

        productsContainer.appendChild(element);
        
    
    }

   
}

 displayProducts()
function updateTotal(totalPrice,totalQuantity){
    sumTotal = sumTotal + (totalPrice * totalQuantity)
    let spanTotal = document.getElementById('totalDiv')
      spanTotal.innerHTML = sumTotal;
}

 


// function submitWatch(event) {
//     event.preventDefault()
//     //creating a tr element
//     const selectItem = document.createElement("tr")
//     selectItem.classList.add("select-item");


//     //creating a td element 
//     const productName = document.createElement("td")
//     productName.classList.add("product-name");
//     productName.innerHTML = WatchName.innerHTML


//     //creating a new td that would have the product code 
//     const productCode = document.createElement("td");
//     productCode.classList.add("product-code");
//     productCode.innerHTML = watchCode.innerHTML;

//     //creating a new td element that would bear the quantity of the product 
//     const productQuantity = document.createElement("td");
//     productQuantity.classList.add("product-quantity");
//     productQuantity.innerHTML = watchQuantity.value;
//     if (watchQuantity.value === "") return alert("put a quantity value")
//     let quantity = productQuantity.innerHTML;


//     //creating a td element
//     const priceDiv = document.createElement('td')
//     priceDiv.classList.add('price-div')
//     priceDiv.innerHTML = watchPrice.innerHTML;
//     let price = priceDiv.innerHTML;

//     //creating another a button element
//     const buttonElement = document.createElement('button');
//     buttonElement.classList.add('delete-button')
//     buttonElement.innerHTML = 'delete button'

//     //code to append all the dynamically created elements to the tr element
//     selectItem.appendChild(productName);
//     selectItem.appendChild(productCode);
//     selectItem.appendChild(productQuantity);
//     selectItem.appendChild(priceDiv);
//     selectItem.appendChild(buttonElement);
//     tBody.appendChild(selectItem);

//     quantity = parseInt(productQuantity.innerHTML)
//     price = parseInt(priceDiv.innerHTML.replace("$", ""))
//     watchTotal = quantity * price;
//     console.log(watchTotal)

//     watchQuantity.value === "";

//     grandTotal(price, quantity)
//     remove()
// }


// function remove(e) {

//     const items = e.target
//     if (items.className === "delete-button") {
//         const parent = items.parentElement
//         parent.remove();

//     }
//     grandTotal()

// }

// function grandTotal(price, quantity) {
//     sumTotal = sumTotal + (price * quantity)
//     spanTotal.innerHTML = sumTotal;
