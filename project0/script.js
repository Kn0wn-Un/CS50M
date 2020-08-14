const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const task = document.getElementById('task')

function checkInput(id){
	let s = task.value
	if(s != ""){
		document.getElementById("but").disabled = false
	}
	else{
		document.getElementById("but").disabled = true
	}
}

function newTodo() {
	var li = document.createElement('li')
    li.appendChild(document.createTextNode(task.value))
	li.setAttribute("id", "" + (parseInt(itemCountSpan.innerHTML)+1))
	li.setAttribute("onClick", "checked(this.id)")
    list.appendChild(li)
	task.value = ""
	itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML)+1
	uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML)+1
	document.getElementById("but").disabled = true
}

function checked(id) {
	if (document.getElementById(id).style.color === "red"){
		return;
	}
	done = document.getElementById(id).innerHTML
	document.getElementById(id).innerHTML = done.strike()
	document.getElementById(id).style.color = "red"
	document.getElementById("del").disabled = false
	uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML)-1
}

function remove(){
	done = parseInt(itemCountSpan.innerHTML) - parseInt(uncheckedCountSpan.innerHTML);
		for(let j = 1, i = 0;i < done;j++){
			if (document.getElementById(""+j) != null && document.getElementById(""+j).style.color === "red"){
			document.getElementById(""+j).remove()
			itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML)-1
			i++;
			}
		}
	document.getElementById("del").disabled = true
}