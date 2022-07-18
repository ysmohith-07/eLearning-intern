// let btn1=document.getElementById("detailsBtn1");
// let details1=document.getElementById("details1");

let arr=['arr1','arr2','arr3','arr4']

function details1(){
    var tag=document.createElement('p');
    var text=document.createTextNode(arr[2]);
    tag.appendChild(text);
    document.getElementById('details1').classList.remove("invisible");
    document.getElementById('details2').classList.add("invisible");
    document.getElementById('details3').classList.add("invisible");
    document.getElementById('details1').appendChild(tag);
    // btn1.style.color="blue";

}

function details2(){
    document.getElementById('details2').classList.remove("invisible");
    document.getElementById('details1').classList.add("invisible");
    document.getElementById('details3').classList.add("invisible");
    // btn1.style.color="blue";
}

function details3(){
    document.getElementById('details3').classList.remove("invisible");
    document.getElementById('details2').classList.add("invisible");
    document.getElementById('details1').classList.add("invisible");
    // btn1.style.color="blue";
}




console.log("hi");
