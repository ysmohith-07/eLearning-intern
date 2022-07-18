let data = [{
    name:"Mohith",
    id:1,
    url:"https://media-cdn.tripadvisor.com/media/photo-s/17/a4/f3/65/img-20190427-184959-largejpg.jpg",
    cost:108 
},{
    name:"Rushik",
    id:2,
    url:"https://media-cdn.tripadvisor.com/media/photo-s/17/a4/f3/65/img-20190427-184959-largejpg.jpg",
    cost:65
},{
    name:"Mahi",
    id:3,
    url:"https://media-cdn.tripadvisor.com/media/photo-s/17/a4/f3/65/img-20190427-184959-largejpg.jpg",
    cost:91
}];

// const container=document.querySelector('#containerp');
window.onload=function(){

    console.log("hi");
data.forEach(res => {
console.log(res);
// Create card element
const card = document.createElement('div');
// card.classList = 'card-body';

// Construct card content
const content = `
<div class="coubox">
<div class="imgsize">
    <img src="${res.url}" width="90%" class="m-2">
    </div>
    <div>
    <p>${res.name}</p>
    <button type="button" class="btn boxxed" data-toggle="modal" data-target="#exampleModal${res.id.toString()}">
    Enroll
</button>
<button class="btn boxxed mt-1">${res.cost}</button>
    </div>

</div> 

<div class="modal fade" id="exampleModal${res.id.toString()}" tabindex="-1" aria-labelledby="exampleModalLabel${res.id.toString()}" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel${res.id.toString()}">Enrollment status</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
     You have successfully enrolled for this course ${res.name}<br>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary boxxed"><a style="color: #ffffff;" id="mylink" href="Cpage.html">Proceed</a></button>
    </div>
</div>
</div>
</div>

`;

// Append newyly created card element to the container
document.querySelector('#containerp').innerHTML += content;
});
}

// let object = {
//     name:"Mohith",
//      cost:108
//

// function add(item){
//     let p=document.createElement('p');
//     p.textContent=item.name;
//     // document.getElementById("containerp").appendChild(p);
//     console.log("hi");
// }

// for(let i=0;i<data.length;i++){
//     add(data[i]);
//     console.log("hi11");
// }


