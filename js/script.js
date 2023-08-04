document.addEventListener("DOMContentLoaded", () => {

    const addTask = document.querySelector('.input__button')
    const input = document.querySelector('input')
    const wrapperForAddingElements = document.querySelector('ul') 
    const deleteBtn = document.querySelector('.btn__remove')


    addTask.addEventListener('click', () =>{
        const newTask = input.value
        if(newTask){
            const list = createEl(newTask)
            wrapperForAddingElements.append(list);
            input.value = '';
            }   
        })

    function createEl (element){
        let list = document.createElement('li')
        list.textContent = element
        let removeBtn = document.createElement('button')
        removeBtn.classList = 'remove'
        removeBtn.textContent = 'remove'
        removeBtn.addEventListener('click', () =>{
            list.remove()
        })
        list.append(removeBtn)
        return list
    }

    deleteBtn.addEventListener('click', () =>{
        const listItems = document.querySelectorAll('li')
        listItems.forEach(item =>{
            item.remove()
        })
    })
})
