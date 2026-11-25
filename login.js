
(function () {

    // 1. Get the login section
    const section = document.getElementById("login");

    if (!section) {
        console.error("Login section not found!");
        return;
    }

    // 2. Demo login credentials
    const users = {
        student: {
            username: "student01",
            password: "student123",
            role: "student"
        },

        admin: {
            username: "admin",
            password: "admin123",
            role: "admin"
        }
    };

    // 3. Website sections
    const studentSections = [
        "special",
        "timetable",
        "rating"
    ];

    const adminSections = [
        "admin"
    ];

    const allSections = [
        ...studentSections,
        ...adminSections
    ];

    // 4. Hide all website sections initially
    function hideAllSections() {

        allSections.forEach(function (id) {

            const element = document.getElementById(id);

            if (element) {
                element.hidden = true;
            }

        });

    }

    // 5. Display login form
    function showLoginForm() {

        hideAllSections();

        section.hidden = false;

        section.innerHTML = `
            <div class="login-container">

                <h1>Hostel Mess Management</h1>

                <p>Welcome! Please login to continue.</p>

                <form id="loginForm">

                    <label>Username</label>

                    <input
                        type="text"
                        id="username"
                        placeholder="Enter username"
                        required
                    >

                    <label>Password</label>

                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                    >

                    <label>Select Role</label>

                    <select id="role">
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button type="submit">
                        Login
                    </button>

                    <p id="loginMessage"
                       class="login-message"
                       aria-live="polite">
                    </p>

                </form>

                <div class="demo-details">

                    <h3>Demo Credentials</h3>

                    <p>Student: student01 / student123</p>

                    <p>Admin: admin / admin123</p>

                </div>

            </div>
        `;

        // 6. Handle login button
        const form = document.getElementById("loginForm");

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const username =
                document.getElementById("username").value.trim();

            const password =
                document.getElementById("password").value;

            const role =
                document.getElementById("role").value;

            const message =
                document.getElementById("loginMessage");

            const selectedUser = users[role];

            // 7. Validate login details
            if (
                username === selectedUser.username &&
                password === selectedUser.password
            ) {

                const userData = {
                    username: username,
                    role: role
                };

                // Save demo session
                sessionStorage.setItem(
                    "messUser",
                    JSON.stringify(userData)
                );

                // Open the correct dashboard
                showDashboard(userData);

            } else {

                message.textContent =
                    "Invalid username or password!";

                message.style.color = "red";

            }

        });

    }

    // 8. Show dashboard according to role
    function showDashboard(user) {

        hideAllSections();

        section.hidden = false;

        // Show student sections
        if (user.role === "student") {

            studentSections.forEach(function (id) {

                const element =
                    document.getElementById(id);

                if (element) {
                    element.hidden = false;
                }

            });

        }

        // Show admin section
        else if (user.role === "admin") {

            adminSections.forEach(function (id) {

                const element =
                    document.getElementById(id);

                if (element) {
                    element.hidden = false;
                }

            });

        }

        // Welcome message and logout button
        section.innerHTML = `

            <div class="welcome-box">

                <h2>
                    Welcome, ${user.username}!
                </h2>

                <p>
                    Logged in as: ${user.role.toUpperCase()}
                </p>

                <button id="logoutBtn">
                    Logout
                </button>

            </div>

        `;

        // 9. Logout functionality
        document.getElementById("logoutBtn")
            .addEventListener("click", function () {

                sessionStorage.removeItem("messUser");

                showLoginForm();

            });

    }

    // 10. Check previous demo session
    function init() {

        hideAllSections();

        const savedUser =
            sessionStorage.getItem("messUser");

        if (savedUser) {

            try {

                const user = JSON.parse(savedUser);

                if (
                    user &&
                    users[user.role] &&
                    user.username === users[user.role].username
                ) {

                    showDashboard(user);

                    return;

                }

            } catch (error) {

                console.error("Invalid session data");

            }

            sessionStorage.removeItem("messUser");

        }

        showLoginForm();

    }

    // Start login system
    init();

})();
