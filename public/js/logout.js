const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    // alert("You have been logged out!");
    window.location.href = "/";
  });