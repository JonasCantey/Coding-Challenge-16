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