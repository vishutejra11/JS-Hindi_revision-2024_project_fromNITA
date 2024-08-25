const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector("body")
buttons.forEach(button => {
    // console.log(button);
    button.addEventListener('click', (ev) =>{
        // console.log(ev);
        // console.log(ev.target);
        if(ev.target.id === 'grey'){
            body.style.backgroundColor = ev.target.id;
        }
        if(ev.target.id === 'white') {
            body.style.backgroundColor = ev.target.id;
        }
        if(ev.target.id === 'blue') {
            body.style.backgroundColor = ev.target.id;
        }
        if(ev.target.id === 'yellow') {
            body.style.backgroundColor = ev.target.id;
        }
    })
});