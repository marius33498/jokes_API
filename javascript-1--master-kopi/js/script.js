
 

 fetch ("https://official-joke-api.appspot.com/random_joke")

       .then(function(joke){
	 return joke.json();
})
	.then(function(API){
		showJoke(API);
	})
    .catch(function(error){
	   document.querySelector("h1").innerHTML += error.message;
 })

function showJoke(jokeline){
document.querySelector(".container").innerHTML += 
	        '<h2>' + jokeline.type + " Joke" + '</h2>' +
	        '<div class="jokesetup">'+ jokeline.setup  +'</div>' +
            '<div class="joke punchline">'+ jokeline.punchline + '</div>'
	 document.title = 'Funny jokes '
}






 
  