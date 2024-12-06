function Product(image, name, price, description, location, time) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
    this.location = location;
    this.time = time;
}

var categories = {
    mobilePhones: [
        new Product("images/iPhone 14 Pro Max.jpg", "iPhone 14 Pro Max", "PKR 320,000", "Latest iPhone with amazing features", "Karachi, Pakistan", "3 days ago"),
        new Product("images/Samsung Galaxy S23.avif", "Samsung Galaxy S23", "PKR 210,000", "High-end Android phone with excellent camera", "Lahore, Pakistan", "2 days ago"),
        new Product("images/Oppo Reno8.jpg", "Oppo Reno8", "PKR 120,000", "Affordable yet powerful smartphone", "Islamabad, Pakistan", "1 day ago"),
        new Product("images/Xiaomi Redmi Note 12.jpg", "Xiaomi Redmi Note 12", "PKR 35,000", "Budget-friendly phone with decent performance", "Rawalpindi, Pakistan", "4 days ago")
    ],
    cars: [
        new Product("images/Honda Civic 2023.avif", "Honda Civic 2023", "PKR 5,000,000", "New model with advanced features", "Karachi, Pakistan", "1 week ago"),
        new Product("images/Toyota Corolla 2023.png", "Toyota Corolla 2023", "PKR 4,200,000", "Reliable and efficient sedan", "Lahore, Pakistan", "5 days ago"),
        new Product("images/Suzuki Swift.png", "Suzuki Swift", "PKR 2,500,000", "Compact car with great fuel economy", "Islamabad, Pakistan", "2 days ago"),
        new Product("images/Ford Mustang.png", "Ford Mustang", "PKR 8,000,000", "Luxury sports car with a powerful engine", "Karachi, Pakistan", "3 days ago")
    ],
    bikes: [
        new Product("images/Harley Davidson.png", "Harley Davidson", "PKR 1,500,000", "Classic American motorcycle", "Sharifabad, Karachi", "3 days ago"),
        new Product("images/Yamaha r15.webp", "Yamaha R15", "PKR 550,000", "Sporty and sleek bike", "Gujranwala, Pakistan", "1 day ago"),
        new Product("images/Honda CBR.webp", "Honda CBR", "PKR 800,000", "Popular sports bike with great handling", "Lahore, Pakistan", "2 days ago"),
        new Product("images/Suzuki Hayabusa.avif", "Suzuki Hayabusa", "PKR 2,000,000", "Fast and powerful super bike", "Islamabad, Pakistan", "4 days ago")
    ],
    homes: [
        new Product("images/Luxury House in DHA.jpg", "Luxury House in DHA", "PKR 50,000,000", "Elegant home with modern amenities", "Karachi, Pakistan", "5 days ago"),
        new Product("images/Modern Villa.webp", "Modern Villa", "PKR 30,000,000", "Spacious villa in a peaceful location", "Lahore, Pakistan", "3 days ago"),
        new Product("images/2 BHK Apartment.jpeg", "2 BHK Apartment", "PKR 10,000,000", "Cozy apartment for small families", "Islamabad, Pakistan", "1 week ago"),
        new Product("images/Beach House.jpg", "Beach House", "PKR 40,000,000", "Stunning beachside house with a beautiful view", "Karachi, Pakistan", "2 days ago")
    ],
    clothes: [
        new Product("images/Casual Shirt.webp", "Casual Shirt", "PKR 2,500", "Comfortable shirt for everyday wear", "Karachi, Pakistan", "4 days ago"),
        new Product("images/Evening Dress.png", "Evening Dress", "PKR 7,500", "Elegant dress for evening events", "Lahore, Pakistan", "3 days ago"),
        new Product("images/Jeans.jpg", "Jeans", "PKR 3,000", "Stylish jeans for casual wear", "Islamabad, Pakistan", "1 day ago"),
        new Product("images/Winter Jacket.webp", "Winter Jacket", "PKR 5,000", "Warm jacket for cold weather", "Rawalpindi, Pakistan", "5 days ago")
    ]
};

function renderCards(category, elementId) {
    var container = document.getElementById(elementId);
    for (var i = 0; i < categories[category].length; i++) {
        var product = categories[category][i];
        var cardHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <small>Location: ${product.location}</small>
                    <p><strong>${product.price}</strong></p>
                    <p><small>${product.time}</small></p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    }
}

renderCards('mobilePhones', 'mobilePhonesCards');
renderCards('cars', 'carsCards');
renderCards('bikes', 'bikesCards');
renderCards('homes', 'homesCards');
renderCards('clothes', 'clothesCards');
