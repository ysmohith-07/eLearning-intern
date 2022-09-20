// let btn1=document.getElementById("detailsBtn1");
// let details1=document.getElementById("details1");

// let arr=['arr1','arr2','arr3','arr4']

// function details1(){
//     var tag=document.createElement('p');
//     var text=document.createTextNode(arr[2]);
//     tag.appendChild(text);
//     document.getElementById('details1').classList.remove("invisible");
//     document.getElementById('details2').classList.add("invisible");
//     document.getElementById('details3').classList.add("invisible");
//     document.getElementById('details1').appendChild(tag);
//     // btn1.style.color="blue";

// }

// function details2(){
//     document.getElementById('details2').classList.remove("invisible");
//     document.getElementById('details1').classList.add("invisible");
//     document.getElementById('details3').classList.add("invisible");
//     // btn1.style.color="blue";
// }

// function details3(){
//     document.getElementById('details3').classList.remove("invisible");
//     document.getElementById('details2').classList.add("invisible");
//     document.getElementById('details1').classList.add("invisible");
//     // btn1.style.color="blue";
// }




// console.log("hi");

personDetails = {
    firstName: "sai mohith",
    lastName: "yerramsetti",
    email: "email@gmail.com"
}

window.addEventListener('load', (event) =>{
    editFirstName = document.getElementById("editFirstName");
    editFirstName.setAttribute("placeholder", personDetails.firstName);
    editLastName = document.getElementById("editLastName");
    editLastName.setAttribute("placeholder", personDetails.lastName);
    editEmail = document.getElementById("editEmail");
    editEmail.setAttribute("placeholder", personDetails.email);

    fullName=document.getElementById("fullName");
    fullName.textContent = personDetails.firstName + " " + personDetails.lastName;
});

function saveChanges(){
    if(editFirstName.value != ""){
        personDetails.firstName = editFirstName.value ;
    }
    if(editLastName.value !== ""){
        personDetails.firstName = editLastName.value;
    }
    if(editEmail.value !== ""){
        personDetails.firstName = editEmail.value;
    }
}