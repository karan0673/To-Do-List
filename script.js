let Light_Theme = document.getElementById("Light-theme");
let Dark_Theme = document.getElementById("Dark-theme");
let Text_area = document.getElementById("Text-Field");
let Search_button = document.getElementById("Search");
let Task = document.getElementById("List-of-task");

//saved theme in localStorage.
let SetTheme = localStorage.getItem("theme");

document.body.classList.add(SetTheme === "Dark" ? "Dark-Theme" : "Light-Theme");

//changed light theme on clicked.
Light_Theme.addEventListener("click",function(){
    document.body.classList.add("Light-Theme");
    document.body.classList.remove("Dark-Theme");
    localStorage.setItem("theme","Light-Theme")
});

//changed dark theme on clicked.
Dark_Theme.addEventListener("click", function(){
    document.body.classList.add("Dark-Theme");
    document.body.classList.remove("Light-Theme");
    localStorage.setItem("theme","Dark");
})


//write text in textfield and list them as task.
function ListItem() {
    let Item = Text_area.value.trim();
    if(Item === "") return;

    let final_task = document.createElement("li");
    final_task.textContent= Item;
    
    //delete button.
    let delete_button= document.createElement("button");
    delete_button.textContent="X";
    delete_button.classList.add("delete_btn")

    //delete button funtionlaity.
    delete_button.addEventListener("click",()=>{
        final_task.remove();
    })
    final_task.appendChild(delete_button);

    Task.appendChild(final_task);
    Text_area.value="";
}

//Button clicked after text in textfield.
Search_button.addEventListener("click",ListItem);

Text_area.addEventListener("keydown",function(event) {
    if(event.key ==="Enter"){
        ListItem()
    }
})



