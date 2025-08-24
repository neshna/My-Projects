let toDoArray = [{
  toDoName: 'cooking',
  toDodate: '23-12-2000'
}];

renderToDoList();

function renderToDoList() {

  let toDoHTML = '';

  toDoArray.forEach( (value , index)=>{
    //let toDO = toDoArray[i];
    let toDO = value;
     console.log(value);
    const { toDoName, toDodate } = toDO

    let HTML = `<p> ${toDoName}</p> <p> ${toDodate}</p>
                <button class= "delete-btn-css " onclick="deleteList(${index})">Delete</button>`
    toDoHTML += HTML;

  })
  document.querySelector(".list-element-js").innerHTML = toDoHTML;

}

function addToList() {

  let inputElement = document.querySelector(".input-js");
  let inputDate = document.querySelector(".date-js")
  let toDoName = inputElement.value
  let toDodate = inputDate.value

  console.log('todoname :'+toDoName)

  if ((toDoName === '')||(toDodate==='')){
    alert('Please fill the input fields');
    return;
  }

  toDoArray.push(
    {
      toDoName,
      toDodate
    }

  );

  inputElement.value = '';
  inputDate.value = '';
  renderToDoList();

}

function deleteList(i) {
  toDoArray.splice(i, 1);
  renderToDoList();
}