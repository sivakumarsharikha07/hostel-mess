(function () {

    // STEP 1: Select admin section

    const section = document.getElementById("admin");

    if (!section) {
        console.error("Admin section not found!");
        return;
    }


    // STEP 2: Feedback storage key

    const STORAGE_KEY = "messFeedback";


    // STEP 3: Read feedback from localStorage

    function getFeedback() {

        try {

            const data = JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "[]"
            );

            return Array.isArray(data) ? data : [];

        } catch (error) {

            console.error("Error reading feedback:", error);

            return [];

        }

    }


    // STEP 4: Create dashboard layout

    function createDashboard() {

        section.innerHTML = `

            <div class="admin-container">

                <div class="admin-header">

                    <h1>Admin Dashboard</h1>

                    <p>
                        Hostel Mess Management
                        - Feedback Analytics
                    </p>

                </div>


                <!-- Summary Cards -->

                <div class="admin-summary">

                    <div class="admin-card">

                        <h3>Total Feedback</h3>

                        <div class="number"
                             id="totalFeedback">0</div>

                    </div>


                    <div class="admin-card">

                        <h3>Average Rating</h3>

                        <div class="number"
                             id="averageRating">0 / 5</div>

                    </div>


                    <div class="admin-card">

                        <h3>5 Star Ratings</h3>

                        <div class="number"
                             id="fiveStar">0</div>

                    </div>


                    <div class="admin-card">

                        <h3>1 Star Ratings</h3>

                        <div class="number"
                             id="oneStar">0</div>

                    </div>

                </div>


                <!-- Rating Chart -->

                <div class="admin-panel">

                    <h2>Rating Distribution</h2>

                    <div id="ratingChart"></div>

                </div>


                <!-- Meal Filter -->

                <div class="admin-panel">

                    <h2>Student Feedback</h2>

                    <label for="mealFilter">
                        Filter by meal:
                    </label>

                    <select
                        id="mealFilter"
                        class="admin-filter">

                        <option value="All">All Meals</option>

                        <option value="Breakfast">
                            Breakfast
                        </option>

                        <option value="Lunch">
                            Lunch
                        </option>

                        <option value="Snacks">
                            Snacks
                        </option>

                        <option value="Dinner">
                            Dinner
                        </option>

                    </select>


                    <div id="feedbackList"></div>

                    <button
                        class="admin-refresh"
                        id="refreshAdmin">

                        Refresh Dashboard

                    </button>

                </div>

            </div>

        `;


        // STEP 5: Add event listeners

        document.getElementById("mealFilter")
            .addEventListener("change", updateDashboard);

        document.getElementById("refreshAdmin")
            .addEventListener("click", updateDashboard);


        updateDashboard();

    }


    // STEP 6: Calculate and display dashboard data

    function updateDashboard() {

        const feedback = getFeedback();

        const total = feedback.length;

        const totalRating = feedback.reduce(
            function (sum, item) {

                return sum + Number(item.rating);

            }, 0
        );

        const average = total > 0
            ? (totalRating / total).toFixed(1)
            : "0.0";


        // Update summary cards

        document.getElementById("totalFeedback")
            .textContent = total;

        document.getElementById("averageRating")
            .textContent = average + " / 5";


        // Count 5-star and 1-star ratings

        const fiveStar = feedback.filter(
            item => Number(item.rating) === 5
        ).length;

        const oneStar = feedback.filter(
            item => Number(item.rating) === 1
        ).length;


        document.getElementById("fiveStar")
            .textContent = fiveStar;

        document.getElementById("oneStar")
            .textContent = oneStar;


        // Update chart

        updateChart(feedback);


        // Update student feedback

        displayFeedback(feedback);

    }


    // STEP 7: Rating distribution chart

    function updateChart(feedback) {

        const chart =
            document.getElementById("ratingChart");

        chart.innerHTML = "";

        for (let star = 5; star >= 1; star--) {

            const count = feedback.filter(
                item => Number(item.rating) === star
            ).length;

            const percentage = feedback.length > 0
                ? (count / feedback.length) * 100
                : 0;


            const row = document.createElement("div");

            row.className = "admin-chart-row";

            const label = document.createElement("span");

            label.textContent = star + " Stars";


            const bar = document.createElement("div");

            bar.className = "admin-bar";

            const fill = document.createElement("div");

            fill.className = "admin-bar-fill";

            fill.style.width = percentage + "%";

            bar.appendChild(fill);


            const number = document.createElement("span");

            number.textContent = count;


            row.append(label, bar, number);

            chart.appendChild(row);

        }

    }


    // STEP 8: Display student reviews

    function displayFeedback(feedback) {

        const list =
            document.getElementById("feedbackList");

        const filter =
            document.getElementById("mealFilter").value;


        list.innerHTML = "";


        // Filter meal

        const filteredFeedback = feedback.filter(
            item => filter === "All" || item.meal === filter
        );


        if (filteredFeedback.length === 0) {

            list.innerHTML = `
                <p class="admin-empty">
                    No feedback available.
                </p>
            `;

            return;

        }


        // Show newest feedback first

        const recentFeedback = [...filteredFeedback].reverse();


        recentFeedback.forEach(function (item) {

            const review = document.createElement("div");

            review.className = "admin-review";


            const heading = document.createElement("h4");

            heading.textContent =
                item.username + " - " + item.meal;


            const stars = document.createElement("div");

            stars.className = "admin-stars";

            const rating = Number(item.rating);

            stars.textContent =
                "★".repeat(Math.max(0, Math.min(5, rating))) +
                "☆".repeat(5 - Math.max(0, Math.min(5, rating)));


            const comment = document.createElement("p");

            comment.textContent =
                item.comment || "No written comment.";


            const date = document.createElement("small");

            date.textContent = "Date: " + item.date;


            review.append(
                heading,
                stars,
                comment,
                date
            );

            list.appendChild(review);

        });

    }


    // STEP 9: Create dashboard

    createDashboard();


    // STEP 10: Refresh when login changes

    window.addEventListener("mess:login", updateDashboard);

    window.addEventListener("storage", function (event) {

        if (event.key === STORAGE_KEY) {
            updateDashboard();
        }

    });


})();

















































const feedback = JSON.parse(
    localStorage.getItem("messFeedback") || "[]"
);

// Total feedback
const totalFeedback = feedback.length;

// Calculate average rating
const totalRating = feedback.reduce(
    (sum, item) => sum + item.rating,
    0
);

const averageRating = totalFeedback > 0
    ? (totalRating / totalFeedback).toFixed(1)
    : 0;

console.log("Total Feedback:", totalFeedback);

console.log("Average Rating:", averageRating);

