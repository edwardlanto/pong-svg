# Pong Game

A basic pong game using SVGs.

## Setup

**Install:**

`> npm i`

**Run:**

`> npm start`

## Keys

**Player 1:**

* a : up
* z : down

**Player 2:**

* ▲ : up
* ▼ : down



**Pause**

* Spacebar

#TECHNOLOGIES USED

*** Webpack ***

*** ES 15 ***

*** HTML ***

*** CSS ***

*** Github ***

*** CSS ***


#Personal Learnings

* How to create an SVG in HTML.

* Translate all SVG properties into JS by giving it setAttributeNS and using createElementNS to give the svg it's shape.

* Using Viewport to set visual canvas to place SVG's

* Using document.addEventListener to hear for certain key presses, and defining the keys on my setings and exporting KEYS.

* Importing JS partials into the Game.js made classes accessible and kept code organized, not having to write everything on a single file.

* Creating the keyword 'new' to create instances of a class, that already has a set parameters

* Keeping JS clean and organized, having all declarations at top of page

* Understanding the render, and how its neccessary to place all SVG items on viewport

* Understandiing how to get collision. For example, this.x - this.radius <=0; If the position of x - 8 <= you know the collision has took place because 0 is the left side of the board.

#Objective

* The objective of Simpsons Pong is to deflect as much donuts as you can into the other persons side. 

* The right player has a disadvantage, having all balls start at his end, but gains an advantage by having the ability to press 'N' and being able to shoot the ball at any given time. Both players are given the opportunity to press 'M' if needed to gain a biggeer paddle size, but in return a slow speed.
