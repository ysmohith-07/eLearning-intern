let obj = [["mosh","https://www.youtube.com/embed/_uQrJ0TkZlc"],
            ["free Code Camp","https://www.youtube.com/embed/HGOBQPFzWKo"]

          ];



window.onload = () => {
    let videosList = document.getElementById("videosList");
    for(let i=0;i<obj.length;i++){
        let box=document.createElement("p");
        box.textContent = obj[i][0];
        box.addEventListener("click", function() {
            document.getElementById("videoPlayer").setAttribute("src",obj[i][1]);
          });
        videosList.appendChild(box);
    }
}