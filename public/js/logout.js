// const logoutBtn = document.getElementById("logout-btn");
//   logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("user");
//     // alert("You have been logged out!");
//     window.location.href = "/";
//   });
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  if (!logoutBtn) return;

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Logout triggered"); // For testing
    localStorage.removeItem("user");
    sessionStorage.clear();
    window.location.href = "/";
  };

  logoutBtn.addEventListener("click", handleLogout);
  logoutBtn.addEventListener("touchend", handleLogout);
});