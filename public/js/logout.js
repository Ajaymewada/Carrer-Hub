// const logoutBtn = document.getElementById("logout-btn");
//   logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("user");
//     // alert("You have been logged out!");
//     window.location.href = "/";
//   });
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault(); // stops <a href="#"> from refreshing
      localStorage.removeItem("user");
      window.location.replace("/");
    });
  }
});