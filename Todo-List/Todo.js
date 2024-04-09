// Step one, reference the form to used to structure input field to add a Todo
// here is the function for step 3
const list=document.querySelector('.todos');

const generateTemplate= (task)=>{
    const htmlTemp = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="fa-solid fa-trash delete"></i>
    </li>
`;
          list.innerHTML +=htmlTemp ;
}



const addForm= document.querySelector('.add');
// step 2,is to attach an event Listener with a submit event listener to this form 
addForm.addEventListener('submit', e=>{
    e.preventDefault();

    const task=document.querySelector('.add-todo').value.trim();
   // console.log(task); yeah it actually works uptil this level 
   // step 3 is to define a function which is going to generate some HTML template and add that to the todolist in the DOM
   if (task.length>0){
   generateTemplate(task);
   addForm.reset();
   }
});

// Example: Adjust behavior for small screens
if (window.innerWidth <= 768) {
    // Code for small screens
}

// Example: Adjust behavior for large screens
if (window.innerWidth >= 992) {
    // Code for large screens
}

// Here lies the JavaScript to delete a Todo from the List 
// the logic here is to check when ever a click is done on the ul list, to know if the target of that click was a trash can icon or any other thing but inside the ul
//in case it was the trash icon, we navigate to the parent element of that particular icon and delete that particular element from the list 
// by doing so, we optimise the time complexity of the scripting method thereby improving the performance of the page in performing the delete operation 
// in addition, no need to manually set up an event listener on each new item added to the ul element since the listener added to the ul itself is delegated to all the children elements of the ul 

// the first step is to query the ul element and add an event listener 
// next is to check if the target element of the click event contains the delete class defined for all trash cans in the HTMl file
// if true, navigate to the parent element and remove the task 
list.addEventListener('click', e=>{
     if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
     }
});
