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

    
    //Task 4: Display the Products

    function displayProducts(products) {
        //Select the container
        const container = document.getElementById("product-container");
        container.innerHTML = ""; // Clear any existing content
      
        //Loop through the first 5 products
        const firstFive = products.slice(0, 5); // Only grab first 5
      
        firstFive.forEach(product => {
          const { name, price, image } = product.fields;
      
          //Create a product card
          const productCard = document.createElement("div");
          productCard.className = "product";
      
          //Fill it with content
          productCard.innerHTML = `
            <img src="${image[0].url}" alt="${name}" />
            <h2>${name}</h2>
            <p>$${price}</p>
          `;
      
          //Append it to the container
          container.appendChild(productCard);
        });
      }

      //Task 5: Reusable Error Handler
      
      // Error handling function to display a user-friendly error and log it
    function handleError(error) {
        const container = document.getElementById("product-container");
        container.innerHTML = `<p style="color:red;"> Error loading products: ${error.message}</p>`;
        console.error("Error in fetchProductsAsync():", error);
      }

      //Task 6: Call Your Fetch Functions
      fetchProductsThen();    //calling the function
      fetchProductAsync(); //cals the function
