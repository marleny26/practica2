const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = loginForm.elements["username"].value;
  const password = loginForm.elements["password"].value;

  if (username === "professor" && password === "password1") {
    // Redirect to professor dashboard
    window.location.href = "dashboard_profe.html";
  } else if (username === "student" && password === "password2") {
    // Redirect to student dashboard
    window.location.href = "student-dashboard.html";
  } else {
    alert("Invalid username or password");
  }
});
