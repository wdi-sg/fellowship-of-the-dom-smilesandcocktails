console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function(land) {
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })
  body.appendChild(middleEarth)
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
    var shire = body.querySelector('article')
    var hobbitList = document.createElement('ul')

    hobbitList.id = 'hobbitId'

    hobbits.forEach(function(hobbit) {

      var eachHobbit = document.createElement('li')
      eachHobbit.className = 'hobbit'
      eachHobbit.textContent = hobbit
      hobbitList.appendChild(eachHobbit)
    })
      shire.appendChild(hobbitList)
}

makeHobbits()
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var shire = body.querySelector('article')
  var hobbitList = shire.querySelector('ul')
  var frodo = hobbitList.querySelector('li')

  var ring = document.createElement('div')
  ring.id = 'the-ring'
  ring.className = 'magic-imbued-jewelry'

  ring.addEventListener('click', nazgulScreech)

  frodo.appendChild(ring)

}

keepItSecretKeepItSafe()

// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var land = body.querySelectorAll('article')
  var sidekick = document.createElement('aside')
  var buddyList = document.createElement('ul')

  buddies.forEach(function(buddies) {

    var eachBuddy = document.createElement('li')
    eachBuddy.className = 'buddy'
    eachBuddy.textContent = buddies
    buddyList.appendChild(eachBuddy)
  })
    sidekick.appendChild(buddyList)
    land[1].appendChild(sidekick)

}

makeBuddies()

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var buddy = document.querySelectorAll('.buddy')

  buddy[3].textContent = 'Aragorn'

}
beautifulStranger()
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var land = body.querySelectorAll('article')
  var hobbitList = document.querySelectorAll('#hobbitId')

  land[1].appendChild(hobbitId)

}

leaveTheShire()
// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
    var theFellowship = document.createElement('div')
    var land = body.querySelectorAll('article')
    var eachHobbit = document.querySelectorAll('.hobbit')
    var eachBuddy = document.querySelectorAll('.buddy')

    land[1].appendChild(theFellowship)

    eachHobbit.forEach(function(eachHobbit) {
      theFellowship.appendChild(eachHobbit)
      // alert('They have joined the party')
    })

    eachBuddy.forEach(function(eachBuddy) {
      theFellowship.appendChild(eachBuddy)
      // alert('They have joined the party')
    })

}

forgeTheFellowShip()
// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  var land = body.querySelectorAll('article')
  var theFellowship = land[1].querySelectorAll('li')
  var gandalf = theFellowship[4]

  gandalf.textContent = 'Gandalf the White'
  gandalf.style.background = 'white'
  gandalf.style.borderStyle = 'solid'
  gandalf.style.borderColor = 'grey'
}

theBalrog()
// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  // alert('The horn of gondor has been blown!')
  var land = body.querySelectorAll('article')
  var div = land[1].querySelector('div')
  var theFellowship = land[1].querySelectorAll('li')
  var boromir = theFellowship[8]

  boromir.style.textDecoration = 'line-through'
  div.removeChild(boromir)

}

hornOfGondor()
// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

  var land = body.querySelectorAll('article')
  var divInRiven = land[1].querySelector('div')
  var hobbitList = divInRiven.querySelectorAll('li')
  var mordor = land[2]
  var mordorId = document.createElement('div')

  mordorId.id = 'mount-doom'

  mordor.appendChild(hobbitList[0])
  mordor.appendChild(hobbitList[1])

}

itsDangerousToGoAlone()
// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

// weWantsIt()
// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
// thereAndBackAgain()
