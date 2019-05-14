
var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function() {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        //Film information

        randomNum = Math.floor(Math.random()*data.length);
        document.querySelector('.title').textContent = (data[randomNum].title);
        document.querySelector('.director').textContent = 'Director: ' + (data[randomNum].director);
        document.querySelector('.producer').textContent = 'Producer: ' + (data[randomNum].producer);
        document.querySelector('.release-date').textContent = 'Release Date: ' + (data[randomNum].release_date);
        document.querySelector('.description').textContent = (data[randomNum].description);

        //Picture and audio file changer

        document.querySelector('.film-cover').setAttribute('src', `images/${randomNum}.jpg`);

        document.querySelector('.music').setAttribute('src', `audio/${randomNum}.mp3`);

    } else {
        document.querySelector('.title').textContent = 'Sorry there was an error!';
    }
}

request.send();

/* Function for button */

function getFilm() {

  var request = new XMLHttpRequest();
  request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
  request.onload = function() {
    //Film Information

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        randomNum = Math.floor(Math.random()*data.length);
        document.querySelector('.title').textContent = (data[randomNum].title);
        document.querySelector('.director').textContent = 'Director: ' + (data[randomNum].director);
        document.querySelector('.producer').textContent = 'Producer: ' + (data[randomNum].producer);
        document.querySelector('.release-date').textContent = 'Release Date: ' + (data[randomNum].release_date);
        document.querySelector('.description').textContent = (data[randomNum].description);

    //Picture and audio file changer

    document.querySelector('.film-cover').setAttribute('src', `images/${randomNum}.jpg`)

    document.querySelector('.music').setAttribute('src', `audio/${randomNum}.mp3`);

    } else {
      document.querySelector('.title').textContent =
        "Sorry there was an error!";
    }
  };

  request.send();

}


//transition
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
  });


