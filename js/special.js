
(function () {
    const section = document.getElementById("special");
    if (!section) return;

    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    const todayIndex = new Date().getDay();
    let selectedDay = todayIndex;
    let activeCategory = "weekly";
    let selectedFestival = "Diwali";

    // ==================================
    // WEEKLY SPECIAL DISHES
    // ==================================

    const weeklySpecials = {
        Monday: {
            dish: "Paneer Butter Masala",
            meal: "Lunch Special",
            description: "Rich and creamy paneer curry served with jeera rice, chapati and fresh salad.",
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900",
            calories: "520 kcal",
            protein: "18 g",
            carbs: "65 g",
            fat: "20 g",
            fibre: "8 g"
        },

        Tuesday: {
            dish: "Veg Dum Biryani",
            meal: "Lunch Special",
            description: "Aromatic vegetable dum biryani served with raita and a refreshing salad.",
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900",
            calories: "480 kcal",
            protein: "12 g",
            carbs: "72 g",
            fat: "15 g",
            fibre: "6 g"
        },

        Wednesday: {
            dish: "Masala Dosa",
            meal: "Breakfast Special",
            description: "Crispy dosa filled with spiced potato masala, served with sambar and chutney.",
            image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900",
            calories: "350 kcal",
            protein: "9 g",
            carbs: "55 g",
            fat: "11 g",
            fibre: "5 g"
        },

        Thursday: {
            dish: "Chole Bhature",
            meal: "Lunch Special",
            description: "Fluffy bhature served with delicious Punjabi chole, onion and pickle.",
            image: "https://images.openai.com/static-rsc-4/lI-ixFXzPwZQsPZPo5jsh13Jm6-3FMHWtP9N8NDiZi_YFFqGTNuVokQiyusInBqOcJUF7M9Z-EDhY9jtG89jJchXRXS9OAvuRi0phkjdizX_p746qY2B4kBudo8lwE-hvbTy_4wGiErQrYJ8GhKc5csVHrwxWpsF0XfpgZ9OKZeXrhfUR3jnyG7vZQIGEZiy?purpose=fullsize",
            calories: "550 kcal",
            protein: "16 g",
            carbs: "70 g",
            fat: "22 g",
            fibre: "9 g"
        },

        Friday: {
            dish: "Veg Fried Rice",
            meal: "Dinner Special",
            description: "Fresh vegetable fried rice served with delicious vegetable manchurian.",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=900",
            calories: "430 kcal",
            protein: "11 g",
            carbs: "68 g",
            fat: "13 g",
            fibre: "5 g"
        },

        Saturday: {
            dish: "Special South Indian Thali",
            meal: "Lunch Special",
            description: "A traditional meal featuring rice, sambar, rasam, poriyal, curd and papad.",
            image:  "https://as1.ftcdn.net/v2/jpg/13/56/72/12/1000_F_1356721226_rg32gtziUWOboGXO3DFNGEZTqV3UDsQ0.webp",
    
            calories: "590 kcal",
            protein: "17 g",
            carbs: "82 g",
            fat: "18 g",
            fibre: "10 g"
        },

        Sunday: {
            dish: "Special Veg Pulao",
            meal: "Lunch Special",
            description: "Flavourful vegetable pulao served with paneer curry, raita and dessert.",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=900",
            calories: "500 kcal",
            protein: "14 g",
            carbs: "70 g",
            fat: "16 g",
            fibre: "7 g"
        }
    };

    // ==================================
    // FESTIVAL SPECIAL MENUS
    // ==================================

    const festivals = {
        Diwali: {
            emoji: "🪔",
            title: "Royal Diwali Celebration",
            description: "Celebrate the festival of lights with a grand vegetarian feast, traditional sweets and festive favourites.",
            banner: "https://www.legacytree.com/wp-content/uploads/udayaditya-barua-xisPXJqwQkA-unsplash-scaled.jpg",
            meals: [
                {
                    name: "Royal Breakfast",
                    food: "Poori, Chole, Halwa and Fresh Fruit",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jqtyd_k7g4naVR4eDIYsbYt6VAMpE_33ecbDosOaQMIhyGwEdiFpMX4&s=10"
                },
                {
                    name: "Grand Festive Lunch",
                    food: "Special Veg Thali, Paneer Butter Masala, Pulao and Raita",
                    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2026/1/4/b1f082db-91b6-4e08-a8aa-b317547ad87f_a4202fd0-0977-4ea1-8b36-3c665e40dc15.jpg"
                },
                {
                    name: "Sweet Celebration",
                    food: "Gulab Jamun, Kaju Katli, Samosa and Juice",
                    image: "https://thumbs.dreamstime.com/b/delicious-indian-sweets-platter-festive-assortment-vibrant-like-jalebi-gulab-jamun-barfi-perfect-celebrations-358889887.jpg",
                },
                {
                    name: "Festival Dinner",
                    food: "Veg Biryani, Malai Kofta, Naan and Dessert",
                    image: "https://www.padhuskitchen.com/wp-content/uploads/2020/06/malai-kofta-500x500.jpg"
                }
            ]
        },

        Holi: {
            emoji: "🎨",
            title: "Colourful Holi Feast",
            description: "Enjoy the festival of colours with delicious traditional snacks, sweets and a special festive meal.",
            banner: "https://www.travelandleisure.com/thmb/OGqKU3DtKB-TmF7OWZKtP58jy88=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bhaktapur-nepal-holi-HOLI0219-b713df59f115452baa1374efb3e59ff2.jpg",
            meals: [
                {
                    name: "Holi Breakfast",
                    food: "Aloo Paratha, Curd, Pickle and Lassi",
                    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700"
                },
                {
                    name: "Festive Lunch",
                    food: "Kadhi Pakora, Jeera Rice, Roti and Salad",
                    image: "https://shwetainthekitchen.com/wp-content/uploads/2020/10/IMG_9709.jpg"
                },
                {
                    name: "Holi Special Snacks",
                    food: "Gujiya, Dahi Vada, Samosa and Thandai",
                    image: "https://ranveerbrar.com/wp-content/uploads/2024/03/gujiya-1.jpeg"
                },
                {
                    name: "Special Dinner",
                    food: "Paneer Curry, Vegetable Pulao and Gulab Jamun",
                    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700"
                }
            ]
        },

        Pongal: {
            emoji: "🌾",
            title: "Traditional Pongal Feast",
            description: "Celebrate the harvest festival with traditional South Indian dishes and sweet Pongal.",
            banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCtChWiFtj24QNJ516LFUhUWIIOE_8A8k4YiI-CqncV1Pf1wjbgdRRMov&s=10",
            meals: [
                {
                    name: "Traditional Breakfast",
                    food: "Ven Pongal, Coconut Chutney and Sambar",
                    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700"
                },
                {
                    name: "Harvest Lunch",
                    food: "Sambar Rice, Poriyal, Rasam, Appalam and Curd",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAMt0yOfokB7dfUcgQN0YFLGageBMY4zLcOFJMgKJrj_Kkf06STRzjRY&s=10"
                },
                {
                    name: "Sweet Pongal Snacks",
                    food: "Sakkarai Pongal, Sundal and Banana",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxK0n9FE8eSI3PGWACb3liZb0a9ytKJgtveqHO865P-YAzURkrcKzwGw1T&s=10"
                },
                {
                    name: "Special Dinner",
                    food: "Lemon Rice, Chapati and Vegetable Kurma",
                    image: "https://www.sharmispassions.com/wp-content/uploads/2013/01/veg-kurma3.jpg"
                }
            ]
        },

        Onam: {
            emoji: "🌼",
            title: "Grand Onam Sadya",
            description: "Experience the traditional Kerala Onam celebration with a colourful banana-leaf feast and delicious payasam.",
            banner: "https://www.travelure.in/wp-content/uploads/2017/08/Kochi-16.jpg",
            meals: [
                {
                    name: "Kerala Breakfast",
                    food: "Idiyappam, Vegetable Stew and Coconut Chutney",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_u29uSfMsl8K1f8chV1zNcVt2jy4xOGZWdX38sXj7oLSRpCGlzJGUOnB&s=10"
                },
                {
                    name: "Grand Onam Sadya",
                    food: "Rice, Avial, Sambar, Olan, Thoran, Pickle and Papad",
                    image: "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1567754084680-PYI15OGCX57BF357MMKN/7969908980_a992ab9bea_b.jpg?format=1500w"
                },
                {
                    name: "Traditional Snacks",
                    food: "Banana Chips, Sharkara Varatti and Payasam",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwwhZj_LELe1IuOVaG9q8avjLCnZPJSPn622KvuMtUKGjRClqrZjxMJD6&s=10"
                },
                {
                    name: "Onam Dinner",
                    food: "Appam, Vegetable Stew and Coconut Rice",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNWYA0ypma3U9tl3mv9ZGIhVdOGNJQP0xtCEid9de0EI6k94VxZJGBRU&s=10"
                }
            ]
        },

        Eid: {
            emoji: "🌙",
            title: "Eid Special Celebration",
            description: "Celebrate Eid with a festive selection of rich flavours, special rice dishes, sweets and refreshing drinks.",
            banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX06WUsvhLIjmO8UuhmDfUByiLAjPrBTYI6aTJhumDmPFpY7Wy0Ncm_KbN&s=10",
            meals: [
                {
                    name: "Eid Breakfast",
                    food: "Sweet Sevai, Fruit and Milk",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZBm3yWLgqS_5ZzhI5YsRTuFrDUjfktgolJkVTKX43QeGWn7HMmbJTww&s=10"
                },
                {
                    name: "Royal Eid Lunch",
                    food: "Special Veg Biryani, Paneer Curry, Raita and Salad",
                    image: "https://thumbs.dreamstime.com/b/traditional-hyderabadi-vegetable-veg-dum-biryani-mixed-veggies-served-raita-selective-focus-223723116.jpg"
                },
                {
                    name: "Eid Sweet Treats",
                    food: "Sheer Khurma, Sweets and Fruit Juice",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5BFL0fXgG0UuHHBdiibNLb5mhdOlLXYzCYiGSPtCMrNLCGkdUL3Thg0&s=10"
                },
                {
                    name: "Festive Dinner",
                    food: "Special Pulao, Dal Makhani, Naan and Dessert",
                    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700"
                }
            ]
        },

        Christmas: {
            emoji: "🎄",
            title: "Magical Christmas Feast",
            description: "Enjoy a joyful Christmas celebration with special meals, festive desserts and delicious treats.",
            banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSRjF1NAHFRN9qYZ9bCCGfLuv7JKCw02eUpx8shn7KHfAbtMe7xZxYv4&s=10",
            meals: [
                {
                    name: "Christmas Breakfast",
                    food: "Pancakes, Fresh Fruits and Hot Chocolate",
                    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700"
                },
                {
                    name: "Christmas Lunch",
                    food: "Veg Pulao, Paneer Curry, Garlic Bread and Salad",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7fZt7Uah51-xrdR0TZWoBYuAnrzCCDkLFzeX3fiwU3TNOGdMMzdvz6s&s=10"
                },
                {
                    name: "Christmas Treats",
                    food: "Christmas Cake, Cookies and Hot Chocolate",
                    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=700"
                },
                {
                    name: "Christmas Dinner",
                    food: "Special Veg Biryani, Creamy Pasta and Dessert",
                    image: "https://cravinghomecooked.com/wp-content/uploads/2020/05/vegetable-biryani-1-23.jpg"
                }
            ]
        }
    };

    // ==================================
    // WEEKLY MENU DISPLAY
    // ==================================

    function renderWeeklyMenu() {
        const dayName = days[selectedDay];
        const dish = weeklySpecials[dayName];

        let dayLabel = "";

        if (selectedDay === todayIndex) {
            dayLabel = "⭐ TODAY'S SPECIAL";
        } else if (selectedDay === (todayIndex + 1) % 7) {
            dayLabel = "✨ TOMORROW'S SPECIAL";
        } else {
            dayLabel = "🌿 WEEKLY SPECIAL";
        }

        return `
            <div class="sm-weekly-section">

                <div class="sm-day-buttons">
                    ${days.map((day, index) => `
                        <button
                            class="sm-day-btn ${selectedDay === index ? "active" : ""}"
                            data-day="${index}">
                            ${day.substring(0, 3)}
                            ${index === todayIndex ? '<span>Today</span>' : ""}
                            ${index === (todayIndex + 1) % 7 ? '<span>Tomorrow</span>' : ""}
                        </button>
                    `).join("")}
                </div>

                <div class="sm-special-card">

                    <div class="sm-special-image-wrap">
                        <img src="${dish.image}" alt="${dish.dish}">
                        <span class="sm-special-badge">${dayLabel}</span>
                    </div>

                    <div class="sm-special-details">
                        <span class="sm-meal-type">🍽️ ${dish.meal}</span>

                        <h2>${dish.dish}</h2>

                        <p>${dish.description}</p>

                        <h3>🥗 Nutritional Information</h3>

                        <div class="sm-nutrition-grid">
                            <div class="sm-nutrition-box">
                                <strong>${dish.calories}</strong>
                                <span>Calories</span>
                            </div>

                            <div class="sm-nutrition-box">
                                <strong>${dish.protein}</strong>
                                <span>Protein</span>
                            </div>

                            <div class="sm-nutrition-box">
                                <strong>${dish.carbs}</strong>
                                <span>Carbohydrates</span>
                            </div>

                            <div class="sm-nutrition-box">
                                <strong>${dish.fat}</strong>
                                <span>Fat</span>
                            </div>

                            <div class="sm-nutrition-box">
                                <strong>${dish.fibre}</strong>
                                <span>Fibre</span>
                            </div>
                        </div>

                        <p class="sm-nutrition-note">
                            *Nutritional values are estimates per serving.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    // ==================================
    // FESTIVAL MENU DISPLAY
    // ==================================

    function renderFestivalMenu() {
        const festival = festivals[selectedFestival];

        return `
            <div class="sm-festival-section">

                <div class="sm-festival-selector">
                    <label for="sm-festival-select">
                        🎉 Choose Your Festival
                    </label>

                    <select id="sm-festival-select">
                        ${Object.keys(festivals).map(name => `
                            <option value="${name}"
                                ${selectedFestival === name ? "selected" : ""}>
                                ${festivals[name].emoji} ${name}
                            </option>
                        `).join("")}
                    </select>
                </div>

                <div class="sm-festival-banner">

                    <img src="${festival.banner}" alt="${festival.title}">

                    <div class="sm-festival-info">
                        <span class="sm-festival-label">
                            ${festival.emoji} FESTIVAL CELEBRATION
                        </span>

                        <h2>${festival.title}</h2>

                        <p>${festival.description}</p>

                        <span class="sm-festival-highlight">
                            ✨ A special celebration menu for everyone
                        </span>
                    </div>

                </div>

                <h2 class="sm-festival-menu-heading">
                    🍽️ Explore the Festival Feast
                </h2>

                <div class="sm-festival-grid">

                    ${festival.meals.map(meal => `
                        <div class="sm-festival-meal-card">

                            <img src="${meal.image}" alt="${meal.name}">

                            <div class="sm-festival-meal-info">
                                <span>✦ FESTIVE SPECIAL</span>
                                <h3>${meal.name}</h3>
                                <p>${meal.food}</p>
                            </div>

                        </div>
                    `).join("")}

                </div>

                <div class="sm-festival-footer">
                    ✨ Good Food • Great Celebrations • Happy Memories ✨
                </div>

            </div>
        `;
    }

    // ==================================
    // MAIN DISPLAY
    // ==================================

    function render() {
        section.innerHTML = `
            <div class="sm-main-container">

                <div class="sm-heading">
                    <span>✦ HOSTEL FOOD EXPERIENCE ✦</span>
                    <h2>Special Food Menu</h2>
                    <p>Discover delicious weekly specials and celebrate
                    festivals with memorable meals.</p>
                </div>

                <div class="sm-category-buttons">

                    <button
                        class="sm-category-btn ${activeCategory === "weekly" ? "active" : ""}"
                        data-category="weekly">
                        🌿 Weekly Special Menu
                    </button>

                    <button
                        class="sm-category-btn ${activeCategory === "festival" ? "active" : ""}"
                        data-category="festival">
                        🎉 Festival Special Menu
                    </button>

                </div>

                ${activeCategory === "weekly"
                    ? renderWeeklyMenu()
                    : renderFestivalMenu()}

            </div>
        `;

        // Main category buttons
        section.querySelectorAll("[data-category]").forEach(button => {
            button.addEventListener("click", function () {
                activeCategory = this.dataset.category;
                render();
            });
        });

        // Day buttons
        section.querySelectorAll("[data-day]").forEach(button => {
            button.addEventListener("click", function () {
                selectedDay = Number(this.dataset.day);
                render();
            });
        });

        // Festival selector
        const festivalSelect = section.querySelector("#sm-festival-select");

        if (festivalSelect) {
            festivalSelect.addEventListener("change", function () {
                selectedFestival = this.value;
                render();
            });
        }
    }

    render();

})();

