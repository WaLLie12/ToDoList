document.addEventListener("DOMContentLoaded", () => {

    const addTask = document.querySelector('.input__button')
    const input = document.querySelector('input')
    const wrapperForAddingElements = document.querySelector('ul') 
    const deleteBtn = document.querySelector('.btn__remove')
    const hideBtn = document.querySelector('.hide__button')

    let hideListItems = false


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
        list.classList.add('list')
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

    deleteBtn.addEventListener('submit', () =>{
        const listItems = document.querySelectorAll('li')
        listItems.forEach(item =>{
            item.remove()
        })
    })

    function hideList(){
        if(hideListItems){
            wrapperForAddingElements.style.display = 'block'
            hideBtn.innerHTML = 'Hide list'
        } else{
            wrapperForAddingElements.style.display = 'none'
            hideBtn.innerHTML = 'Show list'
        }
        hideListItems = !hideListItems;
    }

    hideBtn.addEventListener('click', (hideList))
})
