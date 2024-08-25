const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  const result = document.querySelector('#results')

  if(height < 0 || height === '' || isNaN(height) ){
    result.innerHTML = `Please give a valid Hieght ${height}`
  }

  else if(weight < 0 || weight === '' || isNaN(weight) ){
    result.innerHTML = `Please give a valid weight ${weight}`
  }
 
  const bmi = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
  

  const guide = document.querySelector('#guide')
  if(bmi < 18.6) {
    guide.innerHTML = `<span>Under Weight </span>`
  }

 else if(bmi >= 18.6 && bmi <= 24.9) {
    guide.innerHTML = `<span>Normal Range </span>`
  }

else {
     guide.innerHTML = `<span>Overweight</span>`
}

});