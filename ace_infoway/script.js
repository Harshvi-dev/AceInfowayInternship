// console.log(document.cookie);
// document.cookie = "Name=Harshvi";
// document.cookie= "Name1=Harshvi1";
//  console.log("hey");
// console.log(document.cookie);

function storeDataInCookie() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var interests =[]
    var checkBoxes = document.querySelectorAll('input[name="interests"]:checked');
    checkBoxes.forEach(element => {
        interests.push(element.value);
    });
    // console.log(name,email,password,gender);
    // console.log(interests);
    
    var user = {
        name:`${name}`,
        email:`${email}`,
        password:`${password}`,
        gender:`${gender}`,
        interests:`${interests}`
    }
    console.log(user)
    
    //Not done cookie
    console.log(`Before setting the cookie ${document.cookie}`);
    document.cookie = user;
    console.log(`After seting the cookie ${document.cookie}`)

    //Done local storage
    // localStorage.setItem("user",JSON.stringify(user));
    // var userFromLocalStorage = (localStorage.getItem('user'));
    // console.log("user from local storage :"+userFromLocalStorage);
    
    //Done session storage
    // sessionStorage.setItem("user",JSON.stringify(user))
    // var userFromSessionStorage=sessionStorage.getItem('user');
    // console.log("user from session storage:"+userFromSessionStorage);
    alert("hi")
    
}
