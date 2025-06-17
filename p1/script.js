let users = [];
let user = {};

function existingusers() {
  return (
    "<ul>" +
    users
      .map(
        (u) =>
          `<li><b>${u.name ? u.name : "User"}</b> - <span style="color:gray">${u.email}</span></li>`
      )
      .join("") +
    "</ul>"
  );
}

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const loginForm = () => {
  const str = `<div>
    <h3>Login Form</h3>
    <p id='errorTxt'></p>
    <p>email: <input type='text' id='txtEmail'></p>
    <p>password: <input type='password' id='txtPass'></p>
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    <hr>
    <h4>Existing Users</h4>
    ${existingusers()}
    </div>`;
  root.innerHTML = str;
};

const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
  });
  loginForm();
};

const registerForm = () => {
  const str = `<div>
    <h3>Registration Form</h3>
    <p>name: <input type='text' id='txtName'></p>
    <p>email: <input type='text' id='txtEmail'></p>
    <p>password: <input type='password' id='txtPass'></p>
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    </div>`;
  root.innerHTML = str;
};

const showHome = () => {
  const str = `<div>
    <h3>Welcome here!</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    </div>`;
  root.innerHTML = str;
};

