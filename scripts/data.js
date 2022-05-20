let moviesData = [
    {poster:"https://m.media-amazon.com/images/M/MV5BMjAzNzk5MzgyNF5BMl5BanBnXkFtZTcwOTE4NDU5Ng@@._V1_QL75_UX380_CR0,0,380,562_.jpg", name:"Hugo", releaseyear:"2011", directedby:"Martin Scorsese",rating:"7.5"},
    {poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", name:"The Godfather", releaseyear:"1972", directedby:"Francis Ford Coppola", rating:"9.2"},
    {poster:"https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_QL75_UX380_CR0,4,380,562_.jpg", name:"Pushpa: The Rise - Part 1", releaseyear:"2021", directedby:"Sukumar", rating:"8.0"},
    {poster:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", name:"The Godfather: Part II", releaseyear:"1974", directedby:"Francis Ford Coppola", rating:"9.0"},
    {poster:"https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR5,0,380,562_.jpg", name:"M.S. Dhoni: The Untold Story", releaseyear:"2016", directedby:"Neeraj Pandey", rating:"8.1"},
    {poster:"https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,0,380,562_.jpg", name:"Spider-Man: No Way Home", releaseyear:"2021", directedby:"Jon Watts", rating:"8.7"},
    {poster:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_QL75_UX380_CR0,0,380,562_.jpg", name:"The Batman", releaseyear:"2022", directedby:"Matt Reeves", rating:"8.5"},
    {poster:"https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_QL75_UY562_CR0,0,380,562_.jpg", name:"Gravity", releaseyear:"2013", directedby:"Alfonso Cuarón", rating:"7.7"},
    {poster:"https://m.media-amazon.com/images/M/MV5BNDI3M2E5ZGQtZjVlNS00NzFhLTg0NTAtZDZmOTBjODg3ZDQ1XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_QL75_UX380_CR0,57,380,562_.jpg", name:"Sooryavanshi", releaseyear:"2021", directedby:"Rohit Shetty", rating:"6.7"},
    {poster:"https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg", name:"The Good, the Bad and the Ugly", releaseyear:"1966", directedby:"Sergio Leone", rating:"6.8"},
    {poster:"https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_QL75_UY562_CR35,0,380,562_.jpg", name:"Gangubai Kathiawadi", releaseyear:"2022", directedby:"Sanjay Leela Bhansali", rating:"7.0"},
    {poster:"https://m.media-amazon.com/images/M/MV5BN2E4M2ZmOGUtOGQxNC00MjI2LWJlYTgtYTk4MDI2YmI2ZDIwXkEyXkFqcGdeQXVyOTA0NDk0NzM@._V1_QL75_UY562_CR35,0,380,562_.jpg", name:"Attack", releaseyear:"Comming Soon", directedby:"Lakshya Raj Anand", rating:"0.0"}];


    localStorage.setItem("movies", JSON.stringify(moviesData));


    let imageData = [
        "./Banner Img/11.jpg",
        "./Banner Img/12.jpg",
        "./Banner Img/13.jpg",
        "./Banner Img/14.jpg",
        "./Banner Img/15.jpg",
        "./Banner Img/16.jpg",
        "./Banner Img/17.jpg"];
     
        localStorage.setItem("images", JSON.stringify(imageData));