

// change theme

var modeBtn = document.getElementsByClassName("mode")[0]
var header = document.getElementsByTagName("header")[0]

modeBtn.addEventListener("click", (e) => {
    var image = e.target.getAttribute("src")

    if(image == "images/icon-sun.svg")
     { e.target.src = 'images/icon-moon.svg'
       document.body.style.backgroundColor = "white"
       header.style.backgroundImage = 'url("images/bg-desktop-light.jpg")'
       container.style.backgroundColor = "whitesmoke"
       container.style.color = "black"
       input.style.backgroundColor = "whitesmoke"
       input.style.color = "black"
     }
     else
     {
        e.target.src = 'images/icon-sun.svg'
        document.body.style.backgroundColor = ""
        header.style.backgroundImage = ""
        container.style.backgroundColor = ""
        container.style.color = ""
        input.style.backgroundColor = ""
        input.style.color = ""
     }
 
})


//remove todo
function updateRemove()
{
var remove = document.getElementsByClassName("remove")[0]
remove.addEventListener("click", (e) => {
     e.target.parentElement.parentElement.innerHTML = ""
     updateCount()
    
})
  
}

// add todo
var container = document.getElementsByClassName("container")[0]
var enterBtn = document.getElementById("enter")
var input = document.getElementsByClassName("main-input")[0]
function addTodo()
{
  if(input.value == "") {
    alert("Please fill the field ")
    return
  }
  document.getElementsByClassName("all")[0].click()
  
  var row = document.createElement("div")
  row.innerHTML = `
          <div class="row">
          <input class="checkbox" type="checkbox">
          <p>${input.value}</p>
          <img class="remove" src="images/icons8-remove-image-48.png" alt="" height="35px" width="35px">
         </div>

  `

  container.prepend(row)
  updateCount()
  checkCount()
  updateRemove()
  input.value = ""
}
enterBtn.addEventListener("click", ()=> {
  addTodo()
})


document.addEventListener("keypress",  (e) => {
  if (e.key === 'Enter') {
    addTodo()
  }
})


//items left count

function updateCount()
{ var sum = 0
  var checkboxes = document.getElementsByClassName("checkbox")
  var count = document.getElementsByClassName("count")[0]
  for(let i=0; i < checkboxes.length ; i++)
  {
     if(!checkboxes[i].checked)
     {
      sum++
     }
  }
  count.innerText = sum
}
function checkCount()
{
var checkboxes = document.getElementsByClassName("checkbox")
for(let i=0; i < checkboxes.length ; i++)
  {
    checkboxes[i].addEventListener("change",() => {
      updateCount()
    })  
}
}


//filter content
var all = document.getElementsByClassName("all")[0]
var active = document.getElementsByClassName("active")[0]
var completed = document.getElementsByClassName("completed")[0]
var clear = document.getElementsByClassName("clear")[0]

active.addEventListener("click",(e) => {
  var rows = document.getElementsByClassName("row")
  for(let i=0 ; i < rows.length ; i++)
  {
     if(rows[i].getElementsByTagName("input")[0].checked)
     {
       rows[i].classList.add("hide")
     }
     if(!rows[i].getElementsByTagName("input")[0].checked)
     {
       rows[i].classList.remove("hide")
     }
  }

  e.target.style.color = "cadetblue"
  all.style.color = "rgba(128, 128, 128, 0.63)"
  completed.style.color = "rgba(128, 128, 128, 0.63)"
})

all.addEventListener("click",(e) => {

  var rows = document.getElementsByClassName("row")
  for(let i=0 ; i < rows.length ; i++)
  {
      rows[i].classList.remove("hide")
    
  }
  e.target.style.color = "cadetblue"
  active.style.color = "rgba(128, 128, 128, 0.63)"
  completed.style.color = "rgba(128, 128, 128, 0.63)"

})


completed.addEventListener("click",(e) => {
  var rows = document.getElementsByClassName("row")
  for(let i=0 ; i < rows.length ; i++)
  {
     if(!rows[i].getElementsByTagName("input")[0].checked)
     {
       rows[i].classList.add("hide")
     }
     if(rows[i].getElementsByTagName("input")[0].checked)
     {
       rows[i].classList.remove("hide")
     }
  }

  e.target.style.color = "cadetblue"
  all.style.color = "rgba(128, 128, 128, 0.63)"
  active.style.color = "rgba(128, 128, 128, 0.63)"
})


clear.addEventListener("click", () => {
  var rows = document.getElementsByClassName("row")
  
  for(let i=0 ; i < rows.length ; i++)
  {  
     if(rows[i].getElementsByTagName("input")[0].checked)
    { 
      rows[i].parentElement.innerHTML = ''
      i--
    }   
  }

})
