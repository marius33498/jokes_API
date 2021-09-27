
fetch ("https://official-joke-api.appspot.com/random_ten")
  
        .then(function(joke){
	 return joke.json();
})
	.then(function(API){
		showJoke(API);
	})
    .catch(function(error){
	document.querySelector("h1").innerText = error.message;
 })
/* for loop % div
------------------*/
function showJoke(jokePush){
	for (let i =5; i <jokePush.length; i++){
		document.querySelector(".results").innerHTML += 
			       '<div class="col-sm-6 col-md-4 col-lg-3">' +
                   ' <div class="card">' +
                       ' <div class="joke-detail">' +
                           ' <h4 class="type">' + jokePush[i].type +'</h4>' +
                           ' <div class="setup">' + jokePush[i].setup +
							   '</div>' +
                            '<div class="punchline">' + jokePush[i].punchline + '</div> ' +
                       '</div>'
		             +
                   '</div>'
		         +
               '</div>'
	}
} 
