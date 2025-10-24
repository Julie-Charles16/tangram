const nav = document.querySelector("nav")
const element = document.createElement("button"); 
const header = document.querySelector("header")
const square = document.querySelector(".figure1")
const container = document.querySelector(".container")
const head = document.querySelector("head")
const forms = ["square", "cat", "swan", "duck", "heart", "turtle", "boat", "mystery1", "mystery2", "mystery3"]
square.textContent = "SQUARE"

element.classList.add("darkmode")

header.prepend(element)

const cat = document.createElement("button");
cat.textContent = "CAT" 
nav.append(cat)

const swan = document.createElement("button");
swan.textContent = "SWAN"
nav.append(swan)

const duck = document.createElement("button");
duck.textContent = "DUCK"
nav.append(duck)

const heart = document.createElement("button");
heart.textContent = "HEART"
nav.append(heart)

const turtle = document.createElement("button");
turtle.textContent = "TURTLE"
nav.append(turtle)

const boat = document.createElement("button");
boat.textContent = "BOAT"
nav.append(boat)

const mystery1 = document.createElement("button");
mystery1.textContent = "MYSTERY1"
nav.append(mystery1)

const mystery2 = document.createElement("button");
mystery2.textContent = "MYSTERY2"
nav.append(mystery2)

const mystery3 = document.createElement("button");
mystery3.textContent = "MYSTERY3"
nav.append(mystery3)

const stylesheetsquare = document.createElement("link")
stylesheetsquare.setAttribute("href", "square.css")
stylesheetsquare.setAttribute("rel","stylesheet")

head.append(stylesheetsquare)

const stylesheetcat = document.createElement("link")
stylesheetcat.setAttribute("href", "cat.css")
stylesheetcat.setAttribute("rel","stylesheet")

head.append(stylesheetcat)

const stylesheetswan = document.createElement("link")
stylesheetswan.setAttribute("href", "swan.css")
stylesheetswan.setAttribute("rel","stylesheet")

head.append(stylesheetswan)

const stylesheetduck = document.createElement("link")
stylesheetduck.setAttribute("href", "duck.css")
stylesheetduck.setAttribute("rel","stylesheet")

head.append(stylesheetduck)

const stylesheetheart = document.createElement("link")
stylesheetheart.setAttribute("href", "heart.css")
stylesheetheart.setAttribute("rel","stylesheet")

head.append(stylesheetheart)

const stylesheetturtle = document.createElement("link")
stylesheetturtle.setAttribute("href", "turtle.css")
stylesheetturtle.setAttribute("rel","stylesheet")

head.append(stylesheetturtle)

const stylesheetboat = document.createElement("link")
stylesheetboat.setAttribute("href", "boat.css")
stylesheetboat.setAttribute("rel","stylesheet")

head.append(stylesheetboat)

const stylesheetmystery1 = document.createElement("link")
stylesheetmystery1.setAttribute("href", "mystery1.css")
stylesheetmystery1.setAttribute("rel","stylesheet")

head.append(stylesheetmystery1)

const stylesheetmystery2 = document.createElement("link")
stylesheetmystery2.setAttribute("href", "mystery2.css")
stylesheetmystery2.setAttribute("rel","stylesheet")

head.append(stylesheetmystery2)

const stylesheetmystery3 = document.createElement("link")
stylesheetmystery3.setAttribute("href", "mystery3.css")
stylesheetmystery3.setAttribute("rel","stylesheet")

head.append(stylesheetmystery3)


const navButtons = document.querySelectorAll("nav button")

for (let i = 0; i < forms.length; i++) {
    navButtons[i].addEventListener("click", () => {
        container.classList = "container " +forms[i];
    })

}
