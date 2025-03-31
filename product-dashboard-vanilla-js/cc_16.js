//Task 2: Fetch Products with .then()
console.log("Task 2: Fetch Products with .then()")

function fetchProductsThen () { //creating function to log products from api
    fetch('https://www.course-api.com/javascript-store-products')   //get request to the api
    .then(response => response.json())  //when response comes, we parse to JSON
    .then(products => { //loop through each product and log product name
        products.forEach(product => {
            console.log(product.fields.name);
        });
    })
    .catch(error => {   //if anything breaks we catch the error and log it
        console.error(`Error fetching products:`, error);
    });
}

fetchProductsThen();    //calling the function


//Task 3: Fetch Products with async/await
console.log("Task 3: Fetch Products with async/await")

async function fetchProductAsync() {    //create fetchProductAsync function
    try {   //makes a try.. catch statement to try to pull info from api
        const response = await fetch("https://www.course-api.com/javascript-store-products");   //sends get to api
    
        if (!response.ok) { //checks if the response is successful
          throw new Error(`Server responded with status: ${response.status}`);
        }
    
        const products = await response.json(); //parses response to json
        displayProducts(products);  //calls helper function to render data
      } catch (error) { //catches errors and passes it to handleError function
        handleError(error);
      }
    }
    
    // Helper function: Dynamically adds product elements to the page
    function displayProducts(products) {    //selects elements on page that get displayed
      const container = document.getElementById("product-container");
      container.innerHTML = ""; // Clear existing content
    
      products.forEach(product => { //extracts the name price and image
        const { name, price, image } = product.fields;
    
        const productCard = document.createElement("div");  //creates a div element to hold a product
        productCard.className = "product";
    
        productCard.innerHTML = `   //populates product card with the properties we extracted
          <img src="${image[0].url}" alt="${name}" />
          <h2>${name}</h2>
          <p>$${price}</p>
        `;
    
        container.appendChild(productCard); //adds the finishes cards to the page in the container
      });
    }
    
    // Error handling function to display a user-friendly error and log it
    function handleError(error) {
      const container = document.getElementById("product-container");
      container.innerHTML = `<p style="color:red;"> Error loading products: ${error.message}</p>`;
      console.error("Error in fetchProductsAsync():", error);
    }
    
    fetchProductAsync(); //cals the function