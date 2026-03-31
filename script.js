/* Body aur Background */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

/* Product Card */
.card {
    background: #fff;
    width: 350px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-10px);
}

/* Image Section */
.card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

/* Content Section */
.info {
    padding: 20px;
    text-align: center;
}

.info h2 {
    margin: 10px 0;
    color: #333;
}

.price {
    color: #e67e22;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
}

/* Button */
.buy-btn {
    background-color: #2ecc71;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s;
}

.buy-btn:hover {
    background-color: #27ae60;
            }


