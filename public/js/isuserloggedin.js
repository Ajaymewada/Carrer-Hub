document.addEventListener("DOMContentLoaded", () => {
  const userData = localStorage.getItem("user");

  // ✅ Check if user is logged in
  if (!userData) {
    // alert("You must log in first!");
    window.location.href = "/login";
    return;
  }
  const title = document.getElementById("user_name");
  const user = JSON.parse(userData);
//   console.log(user)
  
  title.textContent = `Welcome Back ${user.username}`
});