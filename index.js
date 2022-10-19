let todolistDOM = document.querySelector("#list")
let btnDOM = document.querySelector("#liveToastBtn")
let taskDOM = document.querySelector("#task")
let uluzun = document.getElementsByTagName("li");

for (let i=0; i<uluzun.length; i++){
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  close.onclick = removeButton;
  uluzun[i].append(closeButton);
  uluzun[i].onclick = check;
}
btnDOM.addEventListener('click',elemanEkle)

function check(){
  this.classList.toggle("checked");

}
function removeButton(){
  this.parentElement.remove();
}
function elemanEkle(){
  if (taskDOM.value == ""){
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    let liDOM = document.createElement('li')
    todolistDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value="";

    liDOM.onclick = check;

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7"
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liDOM.append(closeButton);
    todolistDOM.append(liDOM);
    inputElement.value = (""); 
   }
}