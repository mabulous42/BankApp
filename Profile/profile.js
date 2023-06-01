let currentUser = JSON.parse(localStorage.getItem('CU'));
let allBankEaseUser = JSON.parse(localStorage.getItem("customers"));

let currentUserIndex = allBankEaseUser.findIndex(user => user.accountNumber == currentUser.accountNumber);
console.log(currentUserIndex);

document.getElementById("display-name").innerHTML = currentUser.firstName + " " + currentUser.lastName

//the function navigates the user to the dashboard page
function gotoDashboard() {
    window.location.href = "../Dashboard/dashboard.html";
}

//sign out function
function signOut() {
    localStorage.removeItem('CU');
    setTimeout(() => {
        window.location.href = "../Signin/signin.html";
    }, 2000);
}

function uploadImage(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    console.log(file);

    reader.addEventListener('load', (e) => {
        console.log(e);
        let imgUrl = e.target.result;
        console.log(imgUrl);
        currentUser.profilePicture = imgUrl;
        allBankEaseUser[currentUserIndex].profilePicture = currentUser.profilePicture;
        console.log(allBankEaseUser[currentUserIndex].profilePicture);
        localStorage.setItem("CU", JSON.stringify(currentUser));
        localStorage.setItem("customers", JSON.stringify(allBankEaseUser));
    })

    if (file) {
        reader.readAsDataURL(file)
    }
}

function displayProfileImage() {
    document.getElementById("profileImageTag").innerHTML = `
    <img src="${currentUser.profilePicture}" alt="" class="p-image-div rounded-circle">
    `
}

displayProfileImage();