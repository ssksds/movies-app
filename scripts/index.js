var images = JSON.parse(localStorage.getItem("images"));
console.log(images);

let i=1
let slideshow = document.getElementById("slideshow")

let img = document.createElement("img");
img.src = images[0];
slideshow.append(img)

setInterval(function(){
    if(i==images.length){
        i=0
    }

    let image = images[i]
    slideshow.innerHTML = null;

    let img = document.createElement("img")
    img.src = image

    slideshow.append(img)
    i++;
}, 3000);




var movies = JSON.parse(localStorage.getItem("movies"))
display(movies)
function display(data){
    document.getElementById("movies").innerHTML = "";
    movies.map(function(elem){

        var div = document.createElement("div")

        var img = document.createElement("img")
        img.src = elem.poster
    
        var divinfo = document.createElement("div")
    
        var h2 = document.createElement("h2")
        h2.innerText = elem.name
        
        var ptag= document.createElement("p")
        ptag.innerText= `(${elem.releaseyear})`
    
        divinfo.append(h2,ptag)
    
        var di = document.createElement("h3")
        di.innerText = "Directed by " + elem.directedby;
    
        
        var rating = document.createElement("h5")
        rating.innerText = elem.rating + "⭐"
    
       
        div.append(img,divinfo,di,rating)
        document.getElementById("movies").append(div);
    
    
    })    
}


document.querySelector("#sortBtn").addEventListener("click",soting)
      function soting(event){
        event.preventDefault();
        console.log(document.getElementById("sortBtn").value)
        var d=document.getElementById("sortBtn").value
        if(d=="sort-hl"){
            movies.sort(function(a,b){
              return b.rating - a.rating
            })
          
             display(movies)
          }
             else if(d=="sort-lh"){
                movies.sort(function(a,b){
              return a.rating - b.rating
            })
    
             display(movies)
             }
             else if(d=="sbr"){

                
             }
      }
