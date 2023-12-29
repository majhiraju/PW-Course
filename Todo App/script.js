let nightMode = false
const nightModeToggleBtn = document.querySelector('#nightModeToggle')
const body = document.querySelector('body')

function nightModeToggle(){
  if(nightMode){
    body.style.backgroundColor = 'white'
    nightModeToggleBtn.innerText = 'Dark Mode'
    body.style.color = 'black'
    nightMode = false
  }else{
    body.style.backgroundColor = 'black'
    nightModeToggleBtn.innerText = 'Light Mode'
    body.style.color = 'white'
    nightMode = true
  }
}

nightModeToggleBtn.addEventListener('click', nightModeToggle)


// add list here

const parentTodoListUl = document.querySelector('#todoList')
const newTodoInput = document.querySelector('#newTodo')
const addTodoBtn = document.querySelector('#addTodo')

let todoList = []

function renderList(array){
  parentTodoListUl.innerHTML = ''
  let index = 1
  for (const list of array) {
    const div = document.createElement('div')
    div.className = 'task'

    const todoItem = document.createElement('li')
    const todoStatus = document.createElement('button')
    
    todoItem.innerText = index+' '+list.title
    todoStatus.innerText = list.status
    todoStatus.addEventListener('click', function(){
      if(todoStatus.innerText === 'Status: Completed'){
        todoStatus.innerText = 'Status: Pending'
      }else{
        todoStatus.innerText = 'Status: Completed'
      }
    })
    
    div.append(todoItem, todoStatus)
    parentTodoListUl.append(div)
    index++
  }
}

renderList(todoList)

addTodoBtn.addEventListener('click', function(){
  const valueOfNewTodo = newTodoInput.value
  let task = {title:valueOfNewTodo, status:'Pending'}
  todoList.push(task)
  renderList(todoList)
})

function updateMyTask (){

}