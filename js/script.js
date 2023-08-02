document.addEventListener("DOMContentLoaded", () => {

const addTask = document.querySelector('.input__button')
const input = document.querySelector('input')
const wrapperForAddingElements = document.querySelector('ul') 



addTask.addEventListener('click', (event) =>{
    const newTask = input.value
if(newTask){
    let list = document.createElement('li')
    list.textContent = newTask
    removeItem(list)
    wrapperForAddingElements.append(list)
    input.value = '';
    }   
})
})

function removeItem (element){
    let removeBtn = document.createElement('button')
    removeBtn.classList = 'remove'
    removeBtn.textContent = 'remove'

    element.append(removeBtn)
}