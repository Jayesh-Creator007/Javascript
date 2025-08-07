const productInfo = document.querySelector("#productInfo");
let productlist = JSON.parse(localStorage.getItem("productlist"));
productInfo.addEventListener('submit', (e) => {
  e.preventDefault();
  // calling all the data from user
  const category = document.querySelector("#category").value;
  const p_name = document.querySelector("#p_name").value;
  const p_price = document.querySelector("#p_price").value;
  const p_url = document.querySelector("#p_url").value;
  // putting the data in array
  const arr = productlist || [];
  const id = arr.length + 1;
  // putting data in object
  const addproduct = {
    id,
    category,
    p_name,
    p_price,
    p_url,
  };
  //pushing data in arr
  arr.push(addproduct);
  //putting data in localstorage
  localStorage.setItem("productlist", JSON.stringify(arr));
  location.reload();
  // showing new product and old product 
 
  alert("product added to list")

});
 show();
function show() {
  // creating a card formate to show product
  let output = "";
  productlist?.forEach((product) => {
    output += `
        <div class= " col-xl-3  col-lg-4  col-md-6 mt-4">
        <div class= "card border-0 shadow">
        <img src ="${product.p_url}"alt="${product.p_name}" height="200" width="100%">
        <div class="card-body">
        <h4>${product.p_name}</h4>
        <ul>
        <li>catergory :&nbsp; ${product.category}</li>
        <li>price:&nbsp; ${product.p_price}</li>
        </ul>
        <button onclick="AddToCart(${product.id})" class="btn btn-info"">Add to Cart</button>
        <button onclick="trash(${product.id})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
         <button onclick="update(${product.id})" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button>
        </div>
        </div>
        </div>
        `;
  });
  // calling it to main page
  document.querySelector("#showProduct").innerHTML = output;
}

function update(id) {
    alert("product is sent to updated")
  document.querySelector("#Submit").style.display = "none";
  document.querySelector("#update").style.display = "block";


  const singleUser = productlist.find((product) => {
    return product.id === id;
  });
  console.log(singleUser);

  let category = document.querySelector("#category");
  let p_name = document.querySelector("#p_name");
  let p_price = document.querySelector("#p_price");
  let p_url = document.querySelector("#p_url");



  category.value = singleUser.category;
  p_name.value = singleUser.p_name;
  p_price.value = singleUser.p_price;
  p_url.value = singleUser.p_url;

  document.querySelector("#update").addEventListener("click", () => {
      alert("product is updated")
    const newUser = {
      id,
      category: category.value,
      p_name: p_name.value,
      p_price: p_price.value,
      p_url: p_url.value,
    };
    console.log(newUser);

    // putting the updated product
    const index = productlist.findIndex((product) => {
      return product.id === id;
    });
    productlist[index] = newUser;
    localStorage.setItem("productlist", JSON.stringify(productlist));
    location.reload();
    show();
  });
}

// adding it to add to cart page 
function AddToCart(id) {
  alert("Product added to cart")
  //checking the id
  const singleProduct = productlist.find((product) => {
    return product.id === id;
  });


  let cartlist = JSON.parse(localStorage.getItem("cartlist")) || [];
  const singleCart = cartlist.find((cart) => {
    return cart.id === id;
  });
  //adding the same product again
  if (singleCart) {
    singleCart.count += 1;
  } else {
    const newcart = {
      ...singleProduct,
      count: 1,
    };

    cartlist.push(newcart);
  }

  localStorage.setItem("cartlist", JSON.stringify(cartlist));
}

//Removing the product from the add to cart list
function trash(id) {

  if (confirm("Do you want to delete this product.........?")) {
    const filterProduct = productlist.filter((product) => {
      return product.id !== id;
    });

    console.log(filterProduct);

    localStorage.setItem("productlist", JSON.stringify(filterProduct));
    location.reload();

    show();
  }
}


function countCart() {
  const cartlist = JSON.parse(localStorage.getItem('cartlist'))
  document.querySelector('#cartCount').innerHTML = cartlist.length
}
countCart()

function countCart() {
  const cartlist = JSON.parse(localStorage.getItem('cartlist'));
  let totalQty = 0;
  cartlist.forEach((item) => {
    totalQty += item.count;
  });

  document.querySelector('#cartCount').innerHTML = totalQty;
}
countCart();