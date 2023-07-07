const addTask = document.querySelector('.input__button')
const input = document.querySelector('input')
const wrapperForAddingElements = document.querySelector('ul') 

addTask.addEventListener('click', () =>{
    let list = document.createElement('li')
    wrapperForAddingElements.append(list)
    
})

