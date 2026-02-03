// Write your code below:

const BASE_URL="https://crudcrud.com/api/362686bd914b472ea74db25498379be2/appointmentData";

window.addEventListener("DOMContentLoaded",()=>{
    axios.get(BASE_URL).then((response)=>{
        for(let i=0;i<response.data.length;i++){
            displayUserOnScreen(response.data[i]);
        }
    }).catch((error)=>{
        console.log(error);
        document.body.innerHTML=document.body.innerHTML + "<h4>Something went wrong.</h4>";        
    });
});


function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        (BASE_URL),
        userDetails
      )
      .then((response) => {
        console.log(response.data);
        displayUserOnScreen(response.data);
    })
      
      .catch((error) => {
        document.body.innerHTML=document.body.innerHTML + "<h4>Something went wrong.</h4>";
        console.log(error);
      });
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function () {
        axios.delete(`${BASE_URL}/${userDetails._id}`)
        .then(()=>{
            userList.removeChild(userItem);
        })
        .catch((error)=>{
            console.log(error);
        });
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(userItem);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;

      axios.delete(`${BASE_URL}/${userDetails._id}`);
    });
  }
  
// Do not touch the code below
module.exports = handleFormSubmit;
