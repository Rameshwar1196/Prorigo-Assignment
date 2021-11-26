window.onload = onpageload;
var loaderComponent = document.getElementById('loader');
var contentsComponent = document.getElementById('contents');

function ClickMe() {
  showLoader();
  //console.log('Before Fetch call');
  fetch('https://fakestoreapi.com/products').then((data) =>{
      return data.json();
  }).then((compdata) => {
      //console.log(compdata[2].title);
      //document.getElementById('root').innerHTML=compdata[2].title;

    let data1="";
    compdata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.title}</title></h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
        <p ><input type="checkbox" name="name" value="name"></p> 
    </div> `
    });
   document.getElementById("cards").innerHTML=data1;
    }).catch((err)=>{
        console.log(err);
    })
  // background
  console.log('After Fetch call');
}

function onpageload() {
  contentsComponent.style.display = 'none';
  loaderComponent.style.display = 'none';
}

function buildProductsList(products) {
  showContents();

  var productListContainer = document.createElement('div');
  contentsComponent.appendChild(productListContainer);

  for (let product of products) {
    var image = document.createElement("img");
    image.src = product.image;
    image.width = 80;
    image.height = 80;
    var input = document.createElement("input");
    input.type = "checkbox";
    var productContainer = document.createElement('div');
    productContainer.innerHTML = product.title;
    productListContainer.appendChild(productContainer); //for product seperation
    productListContainer.appendChild(input); //for checkbox
    productListContainer.appendChild(image);//for image
  }
}

function showLoader() {
  loaderComponent.style.display = 'block';
  contentsComponent.style.display = 'none';
}

function showContents() {
  loaderComponent.style.display = 'none';
  contentsComponent.style.display = 'block';
}
