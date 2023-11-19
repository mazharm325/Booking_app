let displayItems = document.querySelector('#users');


function saveData(event) {
    event.preventDefault();
    const userName = event.target.name.value;
    const mail = event.target.email.value;
    const userData = {
        userName,
        mail
    };
    localStorage.setItem(userData.userName, JSON.stringify(userData));
    showToDisplay(userData);

    axios.post('https: //crudcrud.com/api/e06be19f20c146f29d9e606f52caee81/bookingData', userData)
        .then((res) => showToDisplay(res.data))
        .catch((err) => console.log(err));


    // localStorage.setItem(userData.userName, JSON.stringify(userData));
    // showToDisplay(userData);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get('https: //crudcrud.com/api/e06be19f20c146f29d9e606f52caee81/bookingData')
        .then((result) => {
            for (var i = 0; i < result.data.length; i++) {
                showToDisplay(result.data[i]);
                // console.log(result.data);
            }
        })
        .catch((error) => {
            console.log(error);
        })
})

function showToDisplay(userData) {
    if (userData.userName === '' || userData.mail === '') {
        // alert('Please enter all fields');
        var msg = document.querySelector('.msg');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        const userlist = document.querySelector('#users');
        // userlist.innerHTML = userlist.innerHTML + `<li> ${userData.userName} : ${userData.mail} </li>`;
        // const li = document.createElement('li');
        // li.textContent = userData.userName + " : " + userData.mail;
        const li = document.createElement('li');
        li.textContent = userData.userName + " : " + userData.mail;


        const deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'X';
        deleteButton.className = 'btn-danger delete';


        const updateButton = document.createElement('input');
        updateButton.type = 'button';
        updateButton.className = 'btn-update';
        updateButton.value = 'Edit';

        deleteButton.onclick = () => {
            localStorage.removeItem(userData.userName);
            userlist.remove(li);
        };


        updateButton.onclick = () => {
            localStorage.removeItem(userData.userName);

            userlist.remove(li);
            document.querySelector('#name').value = userData.userName;
            document.querySelector('#email').value = userData.mail;
            // document.querySelector('#email').value = userData.mail;
        };


        li.appendChild(updateButton);


        li.appendChild(deleteButton);
        userlist.appendChild(li);

    }
}




// window.addEventListener("DOMContentLoaded", ()=> {
// 	const localStorageObj = localStorage;
// 	const localStorageKeys = Object.keys(localStorageObj);

// 	for(var i=0; i<localStorageKeys.length; i++){
// 		const key = localStorageKeys[i];
// 		const localDeatilsString = localStorageObj[key];
// 		const userDatilsObj = JSON.parse(localDeatilsString);
// 		showToDisplay(userDatilsObj);
// 	}i
// })