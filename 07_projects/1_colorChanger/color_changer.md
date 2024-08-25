# Color changer scheme - Project 1

#
[Project Link] 

https://stackblitz.com/edit/dom-project-chaiaurcode-wbrwxs?file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js%3AL3,1-colorChanger%2Fstyle.css

# Solution code for color change --
```Javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```