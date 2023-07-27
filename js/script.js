const addTask = document.querySelector('.input__button')
const input = document.querySelector('input')
const wrapperForAddingElements = document.querySelector('ul') 

addTask.addEventListener('click', () =>{
    const newTask = input.value
if(newTask){
    let list = document.createElement('li')
    list.innerHTML = newTask
    wrapperForAddingElements.append(list)
    input.value = '';
}   
})

