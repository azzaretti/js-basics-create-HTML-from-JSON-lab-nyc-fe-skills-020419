document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
//1. Find out which button they click

const titanicButton = document.getElementById('Titanic')
const terminatorButton = document.getElementById('Terminator 2')

titanicButton.addEventListener('click', onTitanic) 

terminatorButton.addEventListener('click', ()=> console.log('hasta la vista'))

function onTitanic(){
  let titanicInfo = movies.Titanic
  let titanicTitle = titanicInfo.title
  let titlediv = document.getElementById('title')
  let directordiv = document.getElementById('director')
  let genrediv = document.getElementById('genre')
  let ratingdiv = document.getElementById('filmRating')
  let moviePic = document.getElementById('poster')
  titlediv.innerHTML = titanicTitle
  directordiv.innerHTML = titanicInfo.director
  genrediv.innerHTML = titanicInfo.genre
  ratingdiv.innerHTML = titanicInfo.filmRating
}



//2. Get info for that movie
//3. Replace the info on the page with the info for that movie.
  
  
});
