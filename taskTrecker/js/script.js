const tasksContainer = document.querySelector('.tasks');

const inputAdd = document.querySelector('.input__add');
const btnAdd = document.querySelector('.btn__add');
const btnDel = document.querySelector('.btn__delete');
const allCheck = document.querySelector('.all__check')
const taskCart = document.querySelector('.task__cart');
const btnCart = document.querySelector('.cart');

const arrTasks = [];


const addTask = ()=> {
    const taskList = document.createElement('ul');
    const taskItem = document.createElement('li');
    const taskCheck = document.createElement('input');
   


    taskCheck.setAttribute('type', 'checkbox');
    taskList.classList.add('task__list');
    taskItem.classList.add('task__item');
    taskItem.textContent = inputAdd.value;

    inputAdd.value = '';

    const checkboxCheck = () => {
        taskItem.classList.toggle('checkbox-checked')
        btnDel.classList.add('btn__delete--show');
    }

    allCheck.addEventListener('change', ()=> {
        if (taskItem.classList.contains('checkbox-checked')) {
            taskItem.classList.remove('checkbox-checked')
            taskCheck.removeAttribute('checked')
            btnDel.classList.remove('btn__delete--show');
        } else {
            taskItem.classList.add('checkbox-checked')
            taskCheck.setAttribute('checked', 'checked')
            btnDel.classList.add('btn__delete--show');
        }
       
    })

    btnDel.addEventListener('click', ()=> {
        if (taskItem.classList.contains('checkbox-checked')) {
            taskItem.remove();
            const taskDelete = taskItem.textContent
            arrTasks.push(taskDelete)
        }
    })



    taskCheck.addEventListener('click', checkboxCheck)

    taskItem.append(taskCheck);
    taskList.append(taskItem)
    

    return tasksContainer.append(taskList);
}

btnAdd.addEventListener('click', addTask)

const renderCart = (arr) => {
    arr.map((item)=> {
        const p = document.createElement('p');
        const w = document.createElement('button')
        w.classList.add('return__task')
        w.textContent = 'return task'
        p.textContent = item;
        p.append(w);
        taskCart.append(p);
        console.log(item)
    })
   console.log(arrTasks)
}

btnCart.addEventListener('click', ()=>{renderCart(arrTasks)})



