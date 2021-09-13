//let values = document.getElementById('input-item');
//const x = document.getElementById('items');

const additem = document.getElementById('add-item');

additem.addEventListener("click", () => {

    let n = document.createElement("p");
    
    n.textContent ='~' + document.querySelector("#input-item").value;

    //x.appendChild(n);

    document.querySelector("#items").appendChild(n);

    document.querySelector("#input-item").value = " ";

    n.addEventListener("click", () => {
        n.style.textDecoration = "line-through";
    });


});


/*addEventListener("click", () => {
    document.querySelectorAll('p').style.textDecoration = "line-through";
});*/