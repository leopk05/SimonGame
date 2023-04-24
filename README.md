# Simon Game

This is my implementation of Simon Game implemented by me, the idea came from the project of Angela Yu course, in the future I will implement it for Smartphone.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Play the famous simon game.

### Screenshot

![](./inicialPage.png)

### Links

- GitHub Page: [https://leopk05.github.io/SimonGame/](https://leopk05.github.io/SimonGame/)

## My process

### Built with

- HTML
- CSS
- JavaScript
- Jquery

### What I learned

The implementation process was really good, because it takes a long 
time for me to realize that I need to create an array inside the 
clicked button, and it's incredible to pass and learn those process.

```js
$(".btn").on("click", function (){
  var clicked = this.id;
  makeSound(clicked);
  clickedButton.push(clicked);
  verifer(i);
});
```

### Continued development

I will keep focusing in web development, it's an incredible area, 
you can do a lot of things. In the future I want to be good in 
write better code, more clean and reusable, learn new technologies 
like React, and more backend content.
