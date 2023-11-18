// Function invoked after the form is submitted
function savedata(e) {
    e.preventDefault();
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;

    // Making values in the form null after submitting the form
    document.getElementById("price").value = null;
    document.getElementById("description").value = null;
    document.getElementById("category").value = null;

    // Creating object of the data
    // const d = new Date("2023-11-01");
    // let id = d.now();
    const obj = {
        // id: id,
        price: price,
        description: description,
        category: category,
    };
    // Storing object to local storage
    localStorage.setItem(obj.price, JSON.stringify(obj));

    let newElement = document.createElement("li"); //Creating list element
    let deleteBtn = document.createElement("input"); //Creating delete button
    let editBtn = document.createElement("input"); //Creating edit button
    deleteBtn.className = "delete";
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";
    editBtn.className = "edit";
    editBtn.type = "button";
    editBtn.value = "Edit";
    let data = localStorage.getItem(obj.price); //Extracting data from local storage
    newElement.appendChild(document.createTextNode(data));

    //Adding data and button in the list
    let parentEle = document.getElementById("list");
    parentEle.appendChild(newElement);
    newElement.appendChild(deleteBtn);
    newElement.appendChild(editBtn);

    // Delete button function
    deleteBtn.onclick = function() {
        localStorage.removeItem(obj.price);
        parentEle.removeChild(newElement);
    };

    // Edit button function
    editBtn.onclick = function() {
        localStorage.removeItem(obj.price);
        parentEle.removeChild(newElement);
        document.getElementById("price").value = obj.price;
        document.getElementById("description").value = obj.description;
        document.getElementById("category").value = obj.category;
    };
}