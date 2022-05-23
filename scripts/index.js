//store the products array in localstorage as "products"
//fetching data from localStorage;

let productsArr = JSON.parse(localStorage.getItem("productsData"))||[];

let removedproducts = JSON.parse(localStorage.getItem("trash"))||[];
displayData(productsArr);

function displayData(productsArr) {

   

    
    document.querySelector("tbody").innerHTML = "";
    productsArr.forEach(function(elem,index){
 
        let type = elem.type;
        let description = elem.description;
        let price = elem.price;
        let image = elem.image;
       

        
        
        let tr1 = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
       

        let img = document.createElement("img");
        img.setAttribute("src","https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png" );
        
        td1.append(img);
        td2.innerText = type;
        td3.innerText = description;
        td4.innerText = price;
       
        td5.innerText = "Remove";
    
        td6.addEventListener("click",function(index){
             let item = productsArr.splice(index,1);
             removedProducts.push(item);
             localStorage.setItem("productsData",JSON.stringify(productsArr));
             localStorage.setItem("trash",JSON.stringify(removedProducts));
             displayData(productsArr);
        })

        tr1.append(td1,td2,td3,td4,td5);
        document.querySelector("tbody").append(tr1);
    })
    
   
} 