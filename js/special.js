
(function () {

    // =====================================
    // FESTIVE MENU DATA
    // =====================================

    const festiveMenus = [
        {
            name: "Diwali",
            emoji: "🪔",
            date: "11-08",
            description: "Celebrate the festival of lights!",
            breakfast: {
                veg: ["Masala Dosa", "Sambar", "Chutney", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Boiled Eggs", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            lunch: {
                veg: ["Paneer Biryani", "Dal Makhani", "Raita", "Salad"],
                nonVeg: ["Chicken Biryani", "Egg Curry", "Raita", "Salad"]
            },
            snacks: {
                veg: ["Samosa", "Dhokla"],
                nonVeg: ["Chicken Tikka"]
            },
            dinner: {
                veg: ["Poori", "Chole", "Rice", "Salad"],
                nonVeg: ["Chicken Curry", "Rice", "Chapati", "Salad"]
            },
            dessert: "Gulab Jamun and Kaju Katli"
        },
        {
            name: "Pongal",
            emoji: "🌾",
            date: "01-14",
            description: "Celebrate the harvest festival!",
            breakfast: {
                veg: ["Ven Pongal", "Vadai", "Chutney", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Boiled Eggs", "Bread", "Fruit", "Tea", "Coffee", "Milk"]
            },
            lunch: {
                veg: ["Sakkarai Pongal", "Rice", "Sambar", "Avial", "Salad"],
                nonVeg: ["Chicken Curry", "Rice", "Rasam", "Salad"]
            },
            snacks: {
                veg: ["Sundal"],
                nonVeg: ["Chicken Puff"]
            },
            dinner: {
                veg: ["Idiyappam", "Vegetable Kurma", "Rice", "Salad"],
                nonVeg: ["Chicken Chettinad", "Rice", "Salad"]
            },
            dessert: "Sweet Pongal ✨"
        },
        {
            name: "Onam",
            emoji: "🌼",
            date: "09-06",
            description: "Celebrate Kerala's beautiful harvest festival!",
            breakfast: {
                veg: ["Idiyappam", "Vegetable Stew", "Banana", "Tea", "Coffee", "Milk"],
                nonVeg: ["Egg Roast", "Appam", "Banana", "Tea", "Coffee", "Milk"]
            },
            lunch: {
                veg: ["Traditional Kerala Onam Sadya served on a banana leaf", "Rice", "Sambar", "Parippu", "Avial", "Thoran", "Olan", "Pachadi", "Kichadi", "Erissery", "Pappadam", "Pickles", "Banana Chips", "Salad"],
                nonVeg: []
            },
            snacks: {
                veg: ["Banana Chips", "Pazham Pori"],
                nonVeg: ["Chicken Cutlet"]
            },
            dinner: {
                veg: ["Appam", "Vegetable Kurma", "Rice", "Salad"],
                nonVeg: ["Kerala Chicken Curry", "Rice", "Salad"]
            },
            dessert: "Palada Payasam ✨"
        },
        {
            name: "Holi",
            emoji: "🎨",
            date: "03-04",
            description: "Celebrate the festival of colours!",
            breakfast: {
                veg: ["Aloo Paratha", "Curd", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Omelette", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            lunch: {
                veg: ["Chole Bhature", "Paneer Curry", "Rice", "Salad"],
                nonVeg: ["Chicken Curry", "Rice", "Roti", "Salad"]
            },
            snacks: {
                veg: ["Dahi Bhalla", "Samosa"],
                nonVeg: ["Chicken Roll"]
            },
            dinner: {
                veg: ["Veg Pulao", "Dal Tadka", "Roti", "Salad"],
                nonVeg: ["Chicken Biryani", "Raita", "Salad"]
            },
            dessert: "Gujiya ✨"
        },
        {
            name: "Eid",
            emoji: "🌙",
            date: "00-00",
            description: "Celebrate togetherness and happiness!",
            breakfast: {
                veg: ["Sheermal", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Boiled Eggs", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            lunch: {
                veg: ["Vegetable Biryani", "Paneer Curry", "Raita", "Salad"],
                nonVeg: ["Chicken Biryani", "Kebabs", "Raita", "Salad"]
            },
            snacks: {
                veg: ["Samosa", "Fruit Chaat"],
                nonVeg: ["Chicken Roll"]
            },
            dinner: {
                veg: ["Rumali Roti", "Paneer Masala", "Rice", "Salad"],
                nonVeg: ["Mutton Curry", "Rumali Roti", "Rice", "Salad"]
            },
            dessert: "Sheer Khurma ✨"
        },
        {
            name: "Christmas",
            emoji: "🎄",
            date: "12-25",
            description: "Celebrate the joy of Christmas!",
            breakfast: {
                veg: ["Pancakes", "Hash Browns", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Scrambled Eggs", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            lunch: {
                veg: ["Vegetable Lasagna", "Roasted Vegetables", "Garlic Bread", "Salad"],
                nonVeg: ["Roast Chicken", "Herb Rice", "Garlic Bread", "Salad"]
            },
            snacks: {
                veg: ["Cheese Sandwich"],
                nonVeg: ["Chicken Sandwich"]
            },
            dinner: {
                veg: ["Creamy Mushroom Pasta", "Garlic Bread", "Salad"],
                nonVeg: ["Grilled Chicken", "Mashed Potatoes", "Salad"]
            },
            dessert: "Christmas Plum Cake ✨"
        },
        {
            name: "Halloween",
            emoji: "🎃",
            date: "10-31",
            description: "Enjoy a spooky celebration!",
            breakfast: {
                veg: ["Pancakes", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Scrambled Eggs", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            lunch: {
                veg: ["Veg Burgers", "French Fries", "Salad"],
                nonVeg: ["Chicken Burgers", "French Fries", "Salad"]
            },
            snacks: {
                veg: ["Cheese Sandwiches"],
                nonVeg: ["Chicken Nuggets"]
            },
            dinner: {
                veg: ["Veg Pasta", "Garlic Bread", "Salad"],
                nonVeg: ["Chicken Pasta", "Garlic Bread", "Salad"]
            },
            dessert: "A Dozen Assorted Chocolates 🍫"
        },
        {
            name: "Valentine's Day",
            emoji: "❤️",
            date: "02-14",
            description: "Share something sweet!",
            breakfast: {
                veg: ["French Toast", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Omelette", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            lunch: {
                veg: ["Pink Sauce Pasta", "Garlic Bread", "Salad"],
                nonVeg: ["Chicken Pasta", "Garlic Bread", "Salad"]
            },
            snacks: {
                veg: ["Cheese Sandwich"],
                nonVeg: ["Chicken Sandwich"]
            },
            dinner: {
                veg: ["Margherita Pizza", "Veg Soup", "Salad"],
                nonVeg: ["Chicken Pizza", "Veg Soup", "Salad"]
            },
            dessert: "Chocolate Lava Cake ✨"
        }
    ];

    // =====================================
    // RAMADAN MENU
    // =====================================

    const ramadanMenu = {
        name: "Ramadan Specials",
        emoji: "🌙",
        description: "A special menu for Suhoor and Iftar.",
        suhoor: {
            veg: ["Idli", "Dosa", "Chapati", "Vegetable Kurma", "Fruit", "Curd", "Tea", "Coffee", "Milk"],
            nonVeg: ["Boiled Eggs", "Omelette", "Chapati", "Fruit", "Curd", "Tea", "Coffee", "Milk"]
        },
        iftar: {
            veg: ["Dates", "Water", "Fruit Salad", "Vegetable Samosa", "Veg Biryani", "Raita", "Salad"],
            nonVeg: ["Dates", "Water", "Fruit Salad", "Chicken Rolls", "Chicken Biryani", "Raita", "Salad"]
        },
        dinner: {
            veg: ["Chapati", "Dal", "Vegetable Curry", "Rice", "Salad"],
            nonVeg: ["Chapati", "Chicken Curry", "Rice", "Salad"]
        },
        dessert: "Sheer Khurma ✨"
    };

    // =====================================
    // DATE CONFIGURATION
    // Update movable festival dates yearly.
    // Format: MM-DD
    // =====================================

    const ramadanDates = {
        start: "00-00", // Enter Ramadan start date
        end: "00-00"    // Enter Ramadan end date
    };

    function getToday() {
        const now = new Date();
        return String(now.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(now.getDate()).padStart(2, "0");
    }

    function isDateInRange(today, start, end) {
        if (start === "00-00" || end === "00-00") return false;

        const year = new Date().getFullYear();
        const current = new Date(`${year}-${today}`);
        let startDate = new Date(`${year}-${start}`);
        let endDate = new Date(`${year}-${end}`);

        if (endDate < startDate) {
            if (current < startDate) startDate.setFullYear(year - 1);
            else endDate.setFullYear(year + 1);
        }

        return current >= startDate && current <= endDate;
    }

    // =====================================
    // DISPLAY MENU
    // =====================================

    function createMeal(title, items) {
        return `
            <div class="festive-meal">
                <h4>${title}</h4>
                <p>${items.length ? items.join(" • ") : "Vegetarian menu only"}</p>
            </div>
        `;
    }

    function createFoodOptions(options) {
        return `
            <div class="festive-food-options">
                <div>
                    <span class="veg-tag">VEG</span>
                    <p>${options.veg.join(" • ")}</p>
                </div>
                <div>
                    <span class="nonveg-tag">NON-VEG</span>
                    <p>${options.nonVeg.join(" • ") || "Not served for this meal"}</p>
                </div>
            </div>
        `;
    }

    function createFestiveCard(menu) {
        return `
            <article class="festive-card">
                <h3>${menu.emoji} ${menu.name} Special</h3>
                <p>${menu.description}</p>

                ${createMeal("🌅 Breakfast", "")}
                ${createFoodOptions(menu.breakfast)}

                ${createMeal("🍛 Lunch", "")}
                ${createFoodOptions(menu.lunch)}

                ${createMeal("☕ Snacks", "")}
                ${createFoodOptions(menu.snacks)}

                ${createMeal("🌙 Dinner", "")}
                ${createFoodOptions(menu.dinner)}

                <div class="festive-dessert">
                    <h4>✨ Signature Dessert</h4>
                    <p>${menu.dessert}</p>
                </div>
            </article>
        `;
    }

    function createRamadanCard() {
        return `
            <article class="festive-card ramadan-card">
                <h3>🌙 Ramadan Special Menu</h3>
                <p>${ramadanMenu.description}</p>

                <h4>🌅 Suhoor</h4>
                ${createFoodOptions(ramadanMenu.suhoor)}

                <h4>🌇 Iftar</h4>
                ${createFoodOptions(ramadanMenu.iftar)}

                <h4>🍽️ Dinner</h4>
                ${createFoodOptions(ramadanMenu.dinner)}

                <div class="festive-dessert">
                    <h4>✨ Signature Dessert</h4>
                    <p>${ramadanMenu.dessert}</p>
                </div>
            </article>
        `;
    }

    // =====================================
    // TABS AND MAIN DISPLAY
    // =====================================

    function initSpecialMenu() {
        const container = document.getElementById("festive-menu");

        if (!container) return;

        container.innerHTML = `
            <div class="festive-tabs">
                <button class="festive-tab active" data-tab="festivals">
                    ✨ Festive Specials
                </button>
                <button class="festive-tab" data-tab="ramadan">
                    🌙 Ramadan Specials
                </button>
            </div>

            <div id="festival-content"></div>
            <div id="ramadan-content" hidden></div>
        `;

        const festivalContent = document.getElementById("festival-content");
        const ramadanContent = document.getElementById("ramadan-content");

        festivalContent.innerHTML = festiveMenus.map(createFestiveCard).join("");
        ramadanContent.innerHTML = createRamadanCard();

        container.querySelectorAll(".festive-tab").forEach(button => {
            button.addEventListener("click", () => {
                container.querySelectorAll(".festive-tab").forEach(tab =>
                    tab.classList.remove("active")
                );

                button.classList.add("active");

                const showRamadan = button.dataset.tab === "ramadan";
                festivalContent.hidden = showRamadan;
                ramadanContent.hidden = !showRamadan;
            });
        });
    }

    // =====================================
    // AUTOMATIC HOLIDAY POPUP
    // =====================================

    function showHolidayPopup(menu) {
        if (sessionStorage.getItem("festivePopupShown")) return;

        const popup = document.createElement("div");
        popup.className = "festive-popup";

        popup.innerHTML = `
            <div class="festive-popup-box">
                <button class="festive-close" aria-label="Close popup">&times;</button>
                <h2>${menu.emoji} Happy ${menu.name}!</h2>
                <p>${menu.description}</p>
                <p>Celebrate with our special festive menu!</p>
                <button class="festive-view-button">View Special Menu ✨</button>
            </div>
        `;

        document.body.appendChild(popup);

        function closePopup() {
            popup.remove();
            sessionStorage.setItem("festivePopupShown", "yes");
        }

        popup.querySelector(".festive-close").addEventListener("click", closePopup);

        popup.querySelector(".festive-view-button").addEventListener("click", () => {
            closePopup();

            const section = document.getElementById("special");
            if (section) section.scrollIntoView({ behavior: "smooth" });
        });
    }

    function checkHoliday() {
        const today = getToday();

        const holiday = festiveMenus.find(menu =>
            menu.date === today && menu.date !== "00-00"
        );

        if (holiday) {
            showHolidayPopup(holiday);
        } else if (isDateInRange(today, ramadanDates.start, ramadanDates.end)) {
            showHolidayPopup(ramadanMenu);
        }
    }

    // =====================================
    // START
    // =====================================

    document.addEventListener("DOMContentLoaded", function () {
        initSpecialMenu();
        checkHoliday();
    });

})();
