document.addEventListener("DOMContentLoaded", () => {
  const userData = localStorage.getItem("user");

  // ✅ Check if user is logged in
  if (!userData) {
    // alert("You must log in first!");
    window.location.href = "/login";
    return;
  }
  const title = document.getElementById("user_name");
  const title1 = document.getElementById("username");
  const title2 = document.getElementById("username2");
  const user = JSON.parse(userData);
//   console.log(user)
  title1.textContent = `Welcome back, ${user.username}`
  title2.textContent = `Welcome back, ${user.username}`
  title.textContent = `Welcome Back ${user.username}`
});
