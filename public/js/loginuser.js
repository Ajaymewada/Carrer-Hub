async function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    // alert("Please fill in both fields");
    message.textContent = "Please fill in both fields";
    message.style.color = "red";
    return;
  }

  try {
    const res = await fetch("/api/users/loginuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
    //   alert("Login successful!");
    //   console.log("User:", data.user);
      // redirect or store user info
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/home";
    } else {
      message.textContent = data.message || "Login failed!";
      message.style.color = "red";
    }
  } catch (err) {
    message.textContent = "Something went wrong!";
    message.style.color = "red";
  }
}
