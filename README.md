# What You See Is What You Get

## JS Exercise for NSS

### Decription
JavaScript exercise to practice event listeners.

### Instructions

1. Create an array of objects that represents several cats like so:  
`{`  
`&nbsp&nbsptitle: "Samurai",`  
`&nbsp&nbspname: "Tomoe Gozen",`  
`&nbsp&nbspbio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",`  
`&nbsp&nbspimage: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"`  
`&nbsp&nbsplifespan: {`  
`&nbsp&nbsp&nbsp&nbspbirth: 1747,`  
`&nbsp&nbsp&nbsp&nbspdeath: 1797`  
`&nbsp&nbsp}`  
`}`  
2. Create a text input in your DOM.
3. Beneath that, create a container, block element in your DOM.
4. Create a DOM element for each of the objects inside the container. Style your cat elements however you like.
5. For every even numbered element, have a light yellow background.
6. For every odd numbered element, have a light blue background.
7. Each element's DOM structure should be as shown here:  
`<cat>`
`&nbsp&nbsp<header>Name and title go here</header>`  
`&nbsp&nbsp<section>Bio and image go here</section>`  
`&nbsp&nbsp<footer>Lifespan info goes here</footer>`  
`</cat>`    
8. When you click on one of the cat elements, a dotted border should appear around it.
9. When you click on one of the cat elements, the text input should immediately gain focus so that you can start typing.
10. When there is a highlighted cat element, and you begin typing in the input box, the cat's biography should be immediately bound to what you are typing, letter by letter.
11. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

### Screenshots  

##### Initial load view of website:
![Initial load view of website](https://github.com/JZorvan/What-You-See-Is-What-You-Get/blob/master/screenshots/First%20load.png?raw=true "Initial load view of website")

##### Editing a selected bio section:
![Editing a selected bio section](https://github.com/JZorvan/What-You-See-Is-What-You-Get/blob/master/screenshots/Select%20One.png?raw=true "Editing a selected bio section.")

##### Editing a second selection:
![Editing a second selection](https://github.com/JZorvan/What-You-See-Is-What-You-Get/blob/master/screenshots/Select%20Two.png?raw=true "Editing a second selection.")

### Contributors
- [Janelle Zorvan](https://github.com/JZorvan)