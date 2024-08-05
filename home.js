import { onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { collection, addDoc , getDocs, doc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 

import { auth , db} from "./config.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
        window.location = 'index.html'
    }
  });


const logoutBtn = document.querySelector("#logout-btn");

logoutBtn.addEventListener('click', (event)=>{
  event.preventDefault();
    signOut(auth).then(() => {
        console.log("login successful");
      }).catch((error) => {
        window.location = 'index.html'
      });

})


// firebase database (cloud firestore)
const arr = [];
async function getData() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.data());
    arr.push(doc.data())
  });
  console.log(arr);
  }
  getData()

  // render array in screen

function render() {
  ul.innerHTML = ''
  if (arr.length === 0) {
    ul.innerHTML = "no data found"
    return;
  }
  arr.map((item)=>{
ul.innerHTML += `<li>${item.todo}<button class="deleteBtn">Delete</button>
<button class="editBtn">Edit</button>
<li/>`
  });
}
// delete and add todo btns


// delete btn 
const deleteBtn = document.querySelectorAll(".deleteBtn");
deleteBtn.forEach((btn, index) => {
  btn.addEventListener("click", async () => {
    // console.log(arr[index]);
    await deleteDoc(doc(db, "todos", arr[index].id));
    // console.log("Data deleted");
    arr.splice(index, 1);
    renderTodo();
  });
});



// const deleteBtn = document.querySelectorAll(".deleteBtn");
const editBtn = document.querySelectorAll(".editBtn");

const from = document.querySelector("#form");
const todos = document.querySelector("#todos");
const ul = document.querySelector("#ul");


from.addEventListener ('submit', async (event)=>{
  event.preventDefault();
  // console.log(todos.value);
  arr.push({
    todo:todos.value
  })
  // console.log(arr);
  render()
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo:todos.value
    });
    todos.value = ''
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

})





  