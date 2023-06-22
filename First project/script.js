let add_btn=document.getElementsByClassName("add_btn")
let Quant=document.getElementById("Quant")
for (let index = 0; index < add_btn.length; index++) {
    add_btn[index].addEventListener("click",function(){
        if(add_btn[index].textContent==="Book Appointment"){
            add_btn[index].textContent = "Booked \u2713";
        Quant.textContent=Number(Quant.textContent)+1
        }
        else{
            add_btn[index].textContent = "Book Appointment";
        Quant.textContent=Number(Quant.textContent)-1
        }
        
    })
}
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.getElementById("appointmentForm");
    
    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get the user input values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var date = document.getElementById("date").value;
      var time = document.getElementById("time").value;
      
      // Perform validation (you can add more specific validation rules)
      if (name === "" || email === "" || date === "" || time === "") {
        showMessage("Please fill in all fields.", "error");
      } else {
        // Do something with the appointment data (e.g., send to a server, store in a database)
        // Here, we'll just display a success message
        showMessage("Appointment booked successfully!", "success");
        
        // Clear the form inputs
        form.reset();
      }
    });
  });
  
  // Function to display a message
  function showMessage(message, type) {
    var messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.className = type;
  }
  