//7. crate the table in index.html (see h2/table/thead/th/body/)
//8.  products array stroes all the products of the tranaction
let products =[];

//1.  create the constructor (use capital letter for constructor vice a function use lower case)
function Product(paramProduct,paramPrice){
    this.attrProduct=paramProduct;
    this.attrPrice=paramPrice;
}
//4. get teh values from the inputs using js
let inputProduct = document.getElementById("txtProduct") //the value is "" at this point (which is why you don't have ".value" here)
let inputPrice = document.getElementById("txtPrice");


//2.  register function console log ot see its working
// function register(){
//     console.log("Registration...");
// }

//5. register function - now console log the input product and input price
function register(){
   let newProduct = new Product(inputProduct.value,inputPrice.value);
   //6. get rid of console.log(newProduct) and now do products.push to add the new product in the array
    // console.log(newProduct);
    //6. Add the new poduct in the array
    products.push(newProduct);
    //12 want to input a product and for it to display:
    display();

}

//6. display function - lets make a table
function display(){
    //8. create a variable here, then add that row and inner html after the for line below
    let row="";
    //7. now travel the prducts array using a for loop
    for(let i=0;i<products.length;i++){
        //9. now add let product below
        let product=products[i];
        //10.nnow add ${products.attrProduct} and ${product.attPrice} below
        //13 then ad i+1 below
        row+=`
        <tr>
        <td>${i+1}</td>
        <td>${product.attrProduct}</td>
        <td>${product.attrPrice}</td>
        </tr>`;
    }
    document.getElementById("productsTable").innerHTML=row;
    document.getElementById("productsInCart").innerHTML=products.length;

}
//3.  create an init
function init(){
    //create initial objs
    let product1 = new Product("T-shirt",12.5)
    //6.b. get rid of console.log(product1);
    // 
    //6.b. add the prduct to the array:
    products.push(product1);
    //11. now add dispplay function display();
    display();
}
    
window.onload=init;


