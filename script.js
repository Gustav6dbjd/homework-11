// прошлое дз
document.querySelector('.nonfication').style.cssText= `
   display: flex;
    justify-content: space-between;
   background-color: red;
`

// дз на следующий урок
document.querySelector('.list').addEventListener('click', function(event) {   
    if (event.target.matches('li')) {      
        console.log(event.target.textContent);
    }
});


