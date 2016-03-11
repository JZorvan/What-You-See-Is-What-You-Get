// Assigns variables for DOM elements used in functions below
var catBox = document.getElementById("cat-box");
var catCard = document.getElementsByTagName("cat");
var bioInput = document.getElementById("input-field");

// Created an array of objects to populate the cards with
var catArray = [
    
  grumpyObj = {
    title: "Head Grumper",
    name: "Grumpy Cat",
    bio: "Had fun once, claims that it was awful.",
    image: "http://cdn.grumpycats.com/wp-content/uploads/2012/09/GC-Gravatar-copy.png",
    lifespan: {
      birth: 2012,
      death: "present"
    }
  },

  pinkObj = {
    title: "Rockstar",
    name: "Kitty Bowie",
    bio: "Edgy superstar of the rock world.",
    image: "https://media4.giphy.com/media/c4B7lV6z4I5Xy/200_s.gif",
    lifespan: {
      birth: 2006,
      death: 2016
    }
  },
  
  hipsterObj = {
    title: "Hipster Before It Was Cool",
    name: "Blayke",
    bio: "He likes stuff you haven't even heard of.",
    image: "https://v.cdn.vine.co/r/avatars/B36BA9C7A31052878935400554496_1be214032aa.4.7.jpg?versionId=PU4Ux9yF4EQGpTbCC5eJzj_iuCNLjPXw",
    lifespan: {
      birth: 2013,
      death: "present"
    }
  },
    
  rawrObj = {
    title: "Godzilla's Feline Cousin",
    name: "Meowzilla",
    bio: "Terrorizes small children.",
    image: "http://cat-bounce.com/cb.png",
    lifespan: {
      birth: 1906,
      death: "present"
    }
  },
  
  uglyObj = {
    title: "Fluffy Eyesore",
    name: "Ugly Mug",
    bio: "Has a great personality.",
    image: "http://cdn1.theodysseyonline.com/files/2015/02/11/6355927909212177232130905626_tumblr_static_cat_gif_by_deadly_poetic-d56lrhh.gif",
    lifespan: {
      birth: 1999,
      death: 2010
    }
  },
   
  shockedObj = {
    title: "Drama Queen",
    name: "Becky",
    bio: "Official gossip of the cat world and professional exaggerator.",
    image: "http://rs189.pbsrc.com/albums/z229/Razzledazzy/GIFS/1269259657_omg_cat.gif~c200",
    lifespan: {
      birth: 2001,
      death: 2014
    }
  }];
      
// This function puts the array of cat objects on the DOM and calls it.      
  function printCats(catArray) {       
    for (var i = 0; i < catArray.length; i++) {
      var ballOfString = "";
      ballOfString += `<cat>`;
      ballOfString += `<header><p>Name: ${catArray[i].name}</p><p>Title: ${catArray[i].title}</p></header>`;
      ballOfString += `<section><div class="image-wrapper"><img src=${catArray[i].image}></div><p class="bio">Bio: ${catArray[i].bio}</p></section>`;
      ballOfString += `<footer><p>Lifespan: ${catArray[i].lifespan.birth} - ${catArray[i].lifespan.death}</p></footer>`;
      ballOfString += `</cat>`;
      catBox.innerHTML += ballOfString;
    };
  };

  printCats(catArray)

// This function alters the background colors of the even and odd cards and call it
// NOTE: The "even" and "odd" cards are by the users perspective, not index value
  function cardColor (catCard) {
    for (var c = 0; c < catCard.length; c++) {
      if ([c] % 2 == 0) {
      catCard[c].classList.add("odd-blue");
    } else {
      catCard[c].classList.add("even-yellow");
    };
  }};

  cardColor(catCard)

// This function gives a card a different border when clicked, to draw attention that it is selected and then returns focus to the input area.
// NOTE: This function also removes any existing red dotted borders and clears the input value on click.
  function dottedCard(catCard) {
    for (var j = 0; j < catCard.length; j++) {
      catCard[j].addEventListener("click", function(event) {
        for (var k = 0; k < catCard.length; k++) {
          catCard[k].classList.remove("dotted");
        }
        this.classList.add("dotted");
        bioInput.value = "";
        bioInput.focus();
      });
    };
  };

  dottedCard(catCard)

// This function takes each keypress from the input area and replaces the bio section on the selected card, and clears the input field upon enter keypress.  If you then edit another card, the new bio information remains on previously editted cards.
  bioInput.addEventListener("keyup", function changeBio(e) {
    var targetCard = document.getElementsByClassName("dotted")[0];
      if (targetCard === undefined) {
        alert("Please select a cat to edit.");
      }
      if (targetCard !== undefined) {
        var bioSection = targetCard.getElementsByTagName("p")[2];
        bioSection.innerHTML = "Bio: " + bioInput.value;
      };
      if (event.which == 13) {
        bioSection.value = bioInput.value;
        bioInput.value = "";
      };   
  });



  
