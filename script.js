const menuData = [
    {
        name: "Cheese Burger",
        description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce.",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Margherita Pizza",
        description: "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
        price: "$12.50",
        image: "https://images.unsplash.com/photo-1601924582975-36b18d34f152?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Sushi Platter",
        description: "Fresh sushi rolls with salmon, tuna, and avocado.",
        price: "$20.00",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Pasta Carbonara",
        description: "Creamy pasta with pancetta, parmesan, and black pepper.",
        price: "$15.00",
        image: "https://images.unsplash.com/photo-1617196034331-567a05a45c29?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Chocolate Cake",
        description: "Rich chocolate cake with ganache topping and fresh berries.",
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1601972581470-0cf07c1c25c6?auto=format&fit=crop&w=800&q=80"
    },
];

// Populate menu
const menuContainer = document.getElementById('menu');

function displayMenu(items) {
    menuContainer.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('food-card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="content">
                <h3>${item.name}</h3>
                <p>${item.description.slice(0, 60)}...</p>
            </div>
        `;
        card.addEventListener('click', () => openPopup(item));
        menuContainer.appendChild(card);
    });
}

// Popup
const popup = document.getElementById('popup');
const popupName = document.getElementById('popup-name');
const popupImage = document.getElementById('popup-image');
const popupDescription = document.getElementById('popup-description');
const popupPrice = document.getElementById('popup-price');
const closeBtn = document.getElementById('close');

function openPopup(item) {
    popupName.textContent = item.name;
    popupImage.src = item.image;
    popupDescription.textContent = item.description;
    popupPrice.textContent = item.price;
    popup.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Search filter
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = menuData.filter(item => item.name.toLowerCase().includes(query));
    displayMenu(filtered);
});

// Initial load
displayMenu(menuData);
