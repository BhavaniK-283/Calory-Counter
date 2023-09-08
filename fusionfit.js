/*const signUp-link =document.querySelector('.signUpBtn-link');
const signUp-link =document.querySelector('.signUpBtn-link');
const wrapper =document.querySelector('.wrapper');

signUp-link.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});*/
function changeForm(evt, formName) {
    // Hide all the form tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
  
    // Remove the "active" class from all tab links
    var tabLinks = document.getElementsByClassName("tab-links")[0].getElementsByTagName("li");
    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = "";
    }
  
    // Show the selected form tab
    document.getElementById(formName).style.display = "block";
  
    // Add the "active" class to the clicked tab link
    evt.currentTarget.className = "active";
  }
  
  function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  
  }