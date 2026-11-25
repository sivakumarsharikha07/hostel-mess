(function () {

    // STEP 1: Select rating section

    const section = document.getElementById("rating");

    if (!section) {
        console.error("Rating section not found!");
        return;
    }


    // STEP 2: Local storage key

    const STORAGE_KEY = "messFeedback";


    // STEP 3: Store selected rating

    let selectedRating = 0;


    // STEP 4: Get today's date

    function getToday() {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    // STEP 5: Display rating form

    function showRatingForm() {
        section.innerHTML = `

         <div class="rating-container">

            <h2>Rate Your Food</h2>

                <p>
                    Your feedback helps us improve
                    hostel food quality!
                </p>

                <form id="ratingForm">

                    <label>Select Your Meal</label>

                    <select id="meal">

                        <option value="Breakfast">
                            Breakfast
                        </option>

                        <option value="Lunch">
                            Lunch
                        </option>

                        <option value="Snacks">
                            Evening Snacks
                        </option>

                        <option value="Dinner">
                            Dinner
                        </option>

                    </select>


                    <label>Rate Your Food</label>

                    <div class="stars">

                        <button type="button"
                            class="star-btn"
                            data-value="1"
                            aria-label="1 star">★</button>

                        <button type="button"
                            class="star-btn"
                            data-value="2"
                            aria-label="2 stars">★</button>

                        <button type="button"
                            class="star-btn"
                            data-value="3"
                            aria-label="3 stars">★</button>

                        <button type="button"
                            class="star-btn"
                            data-value="4"
                            aria-label="4 stars">★</button>

                        <button type="button"
                            class="star-btn"
                            data-value="5"
                            aria-label="5 stars">★</button>

                    </div>

                    <p id="ratingText">
                        Select your rating
                    </p>


                    <label>Write Your Feedback</label>

                    <textarea
                        id="comment"
                        placeholder="Tell us about your food..."
                    ></textarea>
                    <button
                        type="submit"
                        id="submitRating"
                        class="rating-submit"
                        disabled
                    >
                        Submit Feedback
                    </button>

                    <p
                        id="ratingMessage"
                        class="rating-message"
                        aria-live="polite">
                    </p>

                </form>

                <div class="rating-note">

                    Your feedback is important
                    for improving our mess services.

                </div>

            </div>
        
        

        


        `;


        // STEP 6: Select star buttons

        const stars =
            section.querySelectorAll(".star-btn");

        const ratingText =
            document.getElementById("ratingText");

        const submitButton =
            document.getElementById("submitRating");


        // STEP 7: Star selection

        stars.forEach(function (star) {

            star.addEventListener("click", function () {

                selectedRating = Number(
                    star.dataset.value
                );

                stars.forEach(function (item) {

                    const value =
                        Number(item.dataset.value);

                    item.classList.toggle(
                        "active",
                        value <= selectedRating
                    );

                });

                ratingText.textContent =
                    selectedRating + " out of 5 stars";

                submitButton.disabled = false;

            });

        });


        // STEP 8: Check duplicate feedback

        const mealSelect =
            document.getElementById("meal");

        mealSelect.addEventListener("change", function () {

            selectedRating = 0;

            stars.forEach(function (star) {
                star.classList.remove("active");
            });

            ratingText.textContent =
                "Select your rating";

            submitButton.disabled = true;

            checkDuplicate();

        });


        function getFeedback() {

            try {

                const data = JSON.parse(
                    localStorage.getItem(STORAGE_KEY) || "[]"
                );

                return Array.isArray(data) ? data : [];

            } catch (error) {

                console.error("Could not read feedback", error);

                return [];

            }

        }


        function checkDuplicate() {

            const user = JSON.parse(
                sessionStorage.getItem("messUser") || "null"
            );

            const message =
                document.getElementById("ratingMessage");

            const meal = mealSelect.value;

            if (!user || user.role !== "student") {

                message.textContent =
                    "Please login as a student to submit feedback.";

                submitButton.disabled = true;

                return true;

            }

            const feedback = getFeedback();

            const alreadySubmitted = feedback.some(function (item) {

                return (
                    item.username === user.username &&
                    item.meal === meal &&
                    item.date === getToday()
                );

            });

            if (alreadySubmitted) {

                message.textContent =
                    "You have already rated this meal today!";

                message.style.color = "red";

                submitButton.disabled = true;

                return true;

            }

            message.textContent = "";

            return false;

        }


        // STEP 9: Submit feedback

        document.getElementById("ratingForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            const user = JSON.parse(
                sessionStorage.getItem("messUser") || "null"
            );

            const meal = mealSelect.value;

            const comment =
                document.getElementById("comment").value.trim();

            const message =
                document.getElementById("ratingMessage");


            if (!user || user.role !== "student") {

                message.textContent =
                    "Please login as a student.";

                return;

            }

            if (selectedRating === 0) {

                message.textContent =
                    "Please select a star rating.";

                return;

            }

            if (checkDuplicate()) {
                return;
            }


            // Create feedback object

            const feedbackData = {

                username: user.username,

                meal: meal,

                rating: selectedRating,

                comment: comment,

                date: getToday()

            };


            // Save feedback

            const feedback = getFeedback();

            feedback.push(feedbackData);

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(feedback)
            );


            // Success message

            message.textContent =
                "Thank you! Your feedback was submitted successfully.";

            message.style.color = "green";


            // Reset form

            document.getElementById("ratingForm").reset();

            selectedRating = 0;

            stars.forEach(function (star) {
                star.classList.remove("active");
            });

            ratingText.textContent =
                "Select your rating";

            submitButton.disabled = true;

        });


        // Check duplicate when form first opens

        checkDuplicate();

    }


    // STEP 10: Start rating system

    showRatingForm();

})();
