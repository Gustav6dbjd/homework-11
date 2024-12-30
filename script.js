
document.querySelector('.nonfication').style.cssText= `
   display: flex;
    justify-content: space-between;
   background-color: red;
`


document.querySelector('.list').addEventListener('click', function(event) {   
    if (event.target.matches('li')) {      
        console.log(event.target.textContent);
    }
});


