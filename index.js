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
  let title = titanicInfo.title
  
  
}



//2. Get info for that movie
//3. Replace the info on the page with the info for that movie.
  
  
});
