async function signup(event) {
  event.preventDefault(); // 🛑 stop the form from reloading the page

  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message");

  if (!email || !username || !password || !confirmPassword) {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
    return;
  }

  try {
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      message.textContent = data.message || "Registration successful!";
      message.style.color = "green";
      // Clear fields
      document.getElementById("email").value = "";
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirmPassword").value = "";
    } else {
      message.textContent = data.message || "Registration failed!";
      message.style.color = "red";
    }
  } catch (error) {
    console.error("Error:", error);
    message.textContent = "Server error. Try again later.";
    message.style.color = "red";
  }
}
