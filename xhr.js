const url = 'https://jsonplaceholder.typicode.com/users'



// Instantiate an xhr object
const xhr = new XMLHttpRequest();



// Open method
xhr.open('GET', url, true);
xhr.responseType = 'json';

// On load method 
xhr.onload = () => {
    console.log(xhr.response);
}




// Send request on server 
xhr.send();


