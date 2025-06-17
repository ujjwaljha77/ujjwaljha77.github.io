const loginForm = () => {
    const str = `<div>
        <h3>Login Form</h3>
        <p>
            <input type="text" placeholder="Username" id="login-username"><br><br>
            <input type="password" placeholder="Password" id="login-password"><br><br>
            <button onclick='showHome()'>Submit</button>
        </p>
        <p>
            <button onclick='registerForm()'>Create Account</button>
        </p>
    `
    root.innerHTML = str + "</div>"
}

const registerForm = () => {
     const str = `<div>
        <h3>Registration Form</h3>
        <p>
            <input type="text" placeholder="Username" id="reg-username"><br><br>
            <input type="email" placeholder="Email" id="reg-email"><br><br>
            <input type="password" placeholder="Password" id="reg-password"><br><br>
            <button onclick='loginForm()'>Submit</button>
        </p>
        <p>
            <button onclick='loginForm()'>Already a member? Login here...</button>
        </p>
    `
    root.innerHTML = str + "</div>"
}

const showHome = () => {
     const str = `<div>
        <h3>Welcome</h3>
        <p>
            <button onclick='loginForm()'>Logout</button>
        </p>
    `
    root.innerHTML = str + "</div>"
}