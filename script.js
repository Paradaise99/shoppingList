const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const shoppingList = document.querySelector(".shoppingList");
const deleteAllBtn = document.querySelector(".footerDelete button");
const saveAllBtn = document.querySelector(".footerSave button");
const savedList = document.querySelector(".savedList")

showTasks();

addBtn.onclick = ()=>{ //Function for adding the new shopping item
    let userEnteredValue = inputBox.value; //Get the input
    let getLocalStorageData = localStorage.getItem("New Item"); //Local storage 
    if(getLocalStorageData == null){ //If local storage enpty
      listArray = []; //Create an empty array 
    }else{
      listArray = JSON.parse(getLocalStorageData);  //JSON string into object
    }
    listArray.push(userEnteredValue); //pushing or adding new value in array
    localStorage.setItem("New Item", JSON.stringify(listArray)); //transforming js object into a json string
    showTasks(); //calling showTask function
    addBtn.classList.remove("active"); //unactive the add button once the task added
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Item");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
  listArray = JSON.parse(getLocalStorageData); 
    }
  let newLiTag = "";
  listArray.forEach((element, index) => {
  newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  shoppingList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}

function savedTasks(){
  let getLocalStorageData = localStorage.getItem("New Item");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
  newListArray = JSON.parse(getLocalStorageData);
    }
  let newLiTag = "";
  newListArray.forEach((element, index) => {
  newLiTag += `<li>${element}</li>`;
  });
  savedList.innerHTML = newLiTag; //adding new li tag inside ul tag
  
}

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Item");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Item", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

deleteAllBtn.onclick = ()=>{
  listArray = []; //empty the array
  localStorage.setItem("New Item", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}

saveAllBtn.onclick = ()=>{
  newListArray = listArray;
  localStorage.setItem("New Item", JSON.stringify(newListArray));
  savedTasks();
}
        