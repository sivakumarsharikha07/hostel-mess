
const menu = {
    Monday: {
        Breakfast: {
            veg: ["Idli", "Sambar", "Chutney", "Fruit", "Tea", "Coffee", "Milk"],
            nonVeg: ["Boiled Egg", "Bread", "Fruit", "Tea", "Coffee", "Milk"]
        },
        Lunch: {
            veg: ["Rice", "Dal", "Paneer", "Mixed Vegetable Curry", "Chapati", "Salad"],
            nonVeg: ["Chicken Curry", "Rice", "Chapati", "Salad"]
        },
        Snacks: {
            veg: ["Samosa"],
            nonVeg: ["Chicken Puff"]
        },
        Dinner: {
            veg: ["Chapati", "Aloo Gobi", "Dal Tadka", "Rice", "Salad"],
            nonVeg: ["Egg Curry", "Chapati", "Rice", "Salad"]
        },
        Dessert: ["Mango Lassi", "Bun Butter Jam"]
    },

    Tuesday: {
        Breakfast: {
            veg: ["Dosa", "Chutney", "Fruit", "Tea", "Coffee", "Milk"],
            nonVeg: ["Omelette", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
        },
        Lunch: {
            veg: ["Rajma Rice", "Sambar Rice", "Curd", "Salad", "Papad"],
            nonVeg: ["Chicken Biryani", "Raita", "Salad", "Egg Curry"]
        },
        Snacks: {
            veg: ["Sandwich"],
            nonVeg: ["Chicken Sandwich"]
        },
        Dinner: {
            veg: ["Roti", "Chana Masala", "Salad", "Rice", "Dal", "Curd"],
            nonVeg: ["Fish Curry", "Rice", "Salad", "Roti", "Curd"]
        },
        Dessert: ["Hot Brownie"]
    },

    Wednesday: {
        Breakfast: {
            veg: ["Poha", "Aloo Paratha", "Fruit", "Tea", "Coffee", "Milk"],
            nonVeg: ["Boiled Egg", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
        },
        Lunch: {
            veg: ["Veg Pulao", "Raita", "Tamarind Rice", "Lemon Rice", "Potato Fry", "Salad"],
            nonVeg: ["Rice", "Prawn Curry", "Raita", "Rasam", "Salad"]
        },
        Snacks: {
            veg: ["Veg Puff"],
            nonVeg: ["Chicken Roll"]
        },
        Dinner: {
            veg: ["Chapati", "Mexican Burrito", "Rice", "Paneer Tikka Masala", "Salad"],
            nonVeg: ["Chicken Masala", "Chapati", "Rice", "Salad"]
        },
        Dessert: ["Kaaju Katli"]
    },

    Thursday: {
        Breakfast: {
            veg: ["Upma", "Chutney", "Fruit", "Tea", "Coffee", "Milk"],
            nonVeg: ["Omelette", "Bread", "Fruit", "Tea", "Coffee", "Milk"]
        },
        Lunch: {
            veg: ["Rice", "Sambar", "Coconut Rice", "Curd", "Salad"],
            nonVeg: ["Fish Fry", "Rice", "Fish Curry", "Curd", "Salad"]
        },
        Snacks: {
            veg: ["Bhel Puri"],
            nonVeg: ["Chicken Cutlet"]
        },
        Dinner: {
            veg: ["Paneer Butter Masala", "Roti", "Hawaiian Pizza", "Salad"],
            nonVeg: ["Crab Curry", "Roti", "Parotta", "Chicken Shawarma", "Salad"]
        },
        Dessert: ["Gulab Jamun"]
    },

    Friday: {
        Breakfast: {
            veg: ["Poori", "Bhaji", "Fruit", "Tea", "Coffee", "Milk"],
            nonVeg: ["Boiled Egg", "Bread", "Fruit", "Tea", "Coffee", "Milk"]
        },
        Lunch: {
            veg: ["Lemon Rice", "Curd", "Bisi Bele Bath", "Soya Biryani", "Salad"],
            nonVeg: ["Mutton Kolambu", "Rice", "Curd", "Salad"]
        },
        Snacks: {
            veg: ["Pakora"],
            nonVeg: ["Chicken Nuggets"]
        },
        Dinner: {
            veg: ["Veg Fried Rice", "Salad", "Roti", "Dal Makhani", "Shahi Paneer"],
            nonVeg: ["Egg Fried Rice", "Salad", "Roti", "Butter Chicken"]
        },
        Dessert: ["Payasam"]
    },

    Saturday: {
        Breakfast: {
            veg: ["Paratha", "Curd", "Fruit", "Tea", "Coffee", "Milk"],
            nonVeg: ["Omelette", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
        },
        Lunch: {
            veg: ["Chole Rice", "Rice", "Bhindi Masala", "Curd", "Salad"],
            nonVeg: ["Seafood Boil", "Rice", "Curd", "Salad"]
        },
        Snacks: {
            veg: ["Biscuits", "Tea"],
            nonVeg: ["Chicken Puff"]
        },
        Dinner: {
            veg: ["Roti", "Mixed Veg", "Puttu", "Kadalai Curry", "Salad", "Curd"],
            nonVeg: ["Kothu Parotta", "Rice", "Salad", "Curd", "Egg Curry"]
        },
        Dessert: ["Choco Lava Cake"]
    },

    Sunday: {
        Breakfast: {
            veg: ["Masala Dosa", "Chutney", "Sambar", "Fruit", "Tea", "Coffee", "Milk"],
            nonVeg: ["Egg Dosa", "Chutney", "Sambar", "Fruit", "Tea", "Coffee", "Milk"]
        },
        Lunch: {
            veg: ["Veg Biryani", "Raita", "Salad", "Curd", "Papad", "Pickle"],
            nonVeg: ["Ragi Mudde", "Chicken Curry", "Raita", "Salad", "Curd", "Pickle"]
        },
        Snacks: {
            veg: ["Veg Cutlet"],
            nonVeg: ["Chicken Cutlet"]
        },
        Dinner: {
            veg: ["Pav Bhaji", "Amritsari Kulcha", "Kadai Paneer", "Salad", "Curd"],
            nonVeg: ["Fish Biryani", "Raita", "Salad", "Curd"]
        },
        Dessert: ["Ice Cream","Soda Can"]
    }
};

(function () {

    // =====================================
    // WEEKLY MESS MENU DATA
    // =====================================

    const menu = {

        Monday: {
            Breakfast: {
                veg: ["Idli", "Sambar", "Chutney", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Boiled Egg", "Bread", "Fruit", "Tea", "Coffee", "Milk"]
            },
            Lunch: {
                veg: ["Rice", "Dal", "Paneer", "Mixed Vegetable Curry", "Chapati", "Salad"],
                nonVeg: ["Chicken Curry", "Rice", "Chapati", "Salad"]
            },
            Snacks: {
                veg: ["Samosa"],
                nonVeg: ["Chicken Puff"]
            },
            Dinner: {
                veg: ["Chapati", "Aloo Gobi", "Dal Tadka", "Rice", "Salad"],
                nonVeg: ["Egg Curry", "Chapati", "Rice", "Salad"]
            },
            Dessert: ["Mango Lassi", "Bun Butter Jam"]
        },

        Tuesday: {
            Breakfast: {
                veg: ["Dosa", "Chutney", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Omelette", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            Lunch: {
                veg: ["Rajma Rice", "Sambar Rice", "Curd", "Salad", "Papad"],
                nonVeg: ["Chicken Biryani", "Raita", "Salad", "Egg Curry"]
            },
            Snacks: {
                veg: ["Sandwich"],
                nonVeg: ["Chicken Sandwich"]
            },
            Dinner: {
                veg: ["Roti", "Chana Masala", "Salad", "Rice", "Dal", "Curd"],
                nonVeg: ["Fish Curry", "Rice", "Salad", "Roti", "Curd"]
            },
            Dessert: ["Hot Brownie"]
        },

        Wednesday: {
            Breakfast: {
                veg: ["Poha", "Aloo Paratha", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Boiled Egg", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            Lunch: {
                veg: ["Veg Pulao", "Raita", "Tamarind Rice", "Lemon Rice", "Potato Fry", "Salad"],
                nonVeg: ["Rice", "Prawn Curry", "Raita", "Rasam", "Salad"]
            },
            Snacks: {
                veg: ["Veg Puff"],
                nonVeg: ["Chicken Roll"]
            },
            Dinner: {
                veg: ["Chapati", "Mexican Burrito", "Rice", "Paneer Tikka Masala", "Salad"],
                nonVeg: ["Chicken Masala", "Chapati", "Rice", "Salad"]
            },
            Dessert: ["Kaaju Katli"]
        },

        Thursday: {
            Breakfast: {
                veg: ["Upma", "Chutney", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Omelette", "Bread", "Fruit", "Tea", "Coffee", "Milk"]
            },
            Lunch: {
                veg: ["Rice", "Sambar", "Coconut Rice", "Curd", "Salad"],
                nonVeg: ["Fish Fry", "Rice", "Fish Curry", "Curd", "Salad"]
            },
            Snacks: {
                veg: ["Bhel Puri"],
                nonVeg: ["Chicken Cutlet"]
            },
            Dinner: {
                veg: ["Paneer Butter Masala", "Roti", "Hawaiian Pizza", "Salad"],
                nonVeg: ["Crab Curry", "Roti", "Parotta", "Chicken Shawarma", "Salad"]
            },
            Dessert: ["Gulab Jamun"]
        },

        Friday: {
            Breakfast: {
                veg: ["Poori", "Bhaji", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Boiled Egg", "Bread", "Fruit", "Tea", "Coffee", "Milk"]
            },
            Lunch: {
                veg: ["Lemon Rice", "Curd", "Bisi Bele Bath", "Soya Biryani", "Salad"],
                nonVeg: ["Mutton Kolambu", "Rice", "Curd", "Salad"]
            },
            Snacks: {
                veg: ["Pakora"],
                nonVeg: ["Chicken Nuggets"]
            },
            Dinner: {
                veg: ["Veg Fried Rice", "Salad", "Roti", "Dal Makhani", "Shahi Paneer"],
                nonVeg: ["Egg Fried Rice", "Salad", "Roti", "Butter Chicken"]
            },
            Dessert: ["Payasam"]
        },

        Saturday: {
            Breakfast: {
                veg: ["Paratha", "Curd", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Omelette", "Toast", "Fruit", "Tea", "Coffee", "Milk"]
            },
            Lunch: {
                veg: ["Chole Rice", "Rice", "Bhindi Masala", "Curd", "Salad"],
                nonVeg: ["Seafood Boil", "Rice", "Curd", "Salad"]
            },
            Snacks: {
                veg: ["Biscuits", "Tea"],
                nonVeg: ["Chicken Puff"]
            },
            Dinner: {
                veg: ["Roti", "Mixed Veg", "Puttu", "Kadalai Curry", "Salad", "Curd"],
                nonVeg: ["Kothu Parotta", "Rice", "Salad", "Curd", "Egg Curry"]
            },
            Dessert: ["Choco Lava Cake"]
        },

        Sunday: {
            Breakfast: {
                veg: ["Masala Dosa", "Chutney", "Sambar", "Fruit", "Tea", "Coffee", "Milk"],
                nonVeg: ["Egg Dosa", "Chutney", "Sambar", "Fruit", "Tea", "Coffee", "Milk"]
            },
            Lunch: {
                veg: ["Veg Biryani", "Raita", "Salad", "Curd", "Papad", "Pickle"],
                nonVeg: ["Ragi Mudde", "Chicken Curry", "Raita", "Salad", "Curd", "Pickle"]
            },
            Snacks: {
                veg: ["Veg Cutlet"],
                nonVeg: ["Chicken Cutlet"]
            },
            Dinner: {
                veg: ["Pav Bhaji", "Amritsari Kulcha", "Kadai Paneer", "Salad", "Curd"],
                nonVeg: ["Fish Biryani", "Raita", "Salad", "Curd"]
            },
            Dessert: ["Ice Cream", "Soda Can"]
        }

    };

    // =====================================
    // MEAL DISPLAY
    // =====================================

    function createMeal(title, options, emoji) {

        return `
            <div class="tt-meal">

                <h3>${emoji} ${title}</h3>

                <div class="tt-food-options">

                    <div>
                        <span class="veg-tag">VEG</span>
                        <p>${options.veg.join(" • ")}</p>
                    </div>

                    <div>
                        <span class="nonveg-tag">NON-VEG</span>
                        <p>${options.nonVeg.join(" • ")}</p>
                    </div>

                </div>

            </div>
        `;
    }

    // =====================================
    // DAILY CARD
    // =====================================

    function createDayCard(day, meals) {

        return `
            <article class="tt-card">

                <h2>${day}</h2>

                ${createMeal("Breakfast", meals.Breakfast, "🌅")}

                ${createMeal("Lunch", meals.Lunch, "🍛")}

                ${createMeal("Snacks", meals.Snacks, "☕")}

                ${createMeal("Dinner", meals.Dinner, "🌙")}

                <div class="tt-dessert">

                    <h3>✨ Dessert</h3>

                    <p>${meals.Dessert.join(" • ")}</p>

                </div>

            </article>
        `;
    }

    // =====================================
    // INITIALIZE WEEKLY MENU
    // =====================================

    function initTimetable() {

        const container = document.getElementById("menu");

        if (!container) return;

        const days = Object.keys(menu);

        const today = new Date().toLocaleDateString("en-US", {
            weekday: "long"
        });

        const selectedDay = menu[today] ? today : "Monday";

        container.innerHTML = `

            <div class="tt-tabs">

                ${days.map(day => `
                    <button
                        class="tt-tab ${day === selectedDay ? "active" : ""}"
                        data-day="${day}">
                        ${day}
                    </button>
                `).join("")}

            </div>

            <div class="tt-cards" id="daily-menu-content"></div>

        `;

        const content = document.getElementById("daily-menu-content");

        function showDay(day) {

            content.innerHTML = createDayCard(day, menu[day]);

            container.querySelectorAll(".tt-tab").forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.day === day
                );

            });

        }

        container.querySelectorAll(".tt-tab").forEach(button => {

            button.addEventListener("click", () => {

                showDay(button.dataset.day);

            });

        });

        showDay(selectedDay);

    }

    // =====================================
    // START
    // =====================================

    document.addEventListener("DOMContentLoaded", initTimetable);

})();
