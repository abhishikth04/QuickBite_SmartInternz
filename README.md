# 🍔 QuickBite - Smart Food Delivery App

QuickBite is a full-stack food ordering web application built as part of a project with **SmartInternz**. It allows users to explore restaurants, browse food items, place orders, and track them. The platform also supports admin controls and restaurant partner management.

## 🌟 Features

### 👤 User Flow
- Register and log in
- Explore food items from different restaurants
- Add items to cart and place orders
- Track orders in Profile
- Automatically suggested diet-based menu (Prototype Feature)

### 🍽️ Restaurant Flow
- Register as a restaurant
- Await admin approval
- Add/edit food items
- View orders placed for their restaurant

### 🛠️ Admin Flow
- Log in securely as admin
- Approve/reject restaurant registrations
- View platform-wide orders, users, and items

---

## 💻 Tech Stack

- **Frontend:** React.js + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT
- **Routing:** React Router

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abhishikth04/QuickBite_SmartInternz.git
cd QuickBite_SmartInternz

2. Set Up Backend

cd server
npm install

Create a .env file inside /server with the following:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start the backend server:

npm start

3. Set Up Frontend

cd ../client
npm install
npm start

Visit http://localhost:3000 to run the app locally.


---

🗃️ MongoDB Collections

Users – stores user, admin, and restaurant credentials

Orders – stores order details per user

FoodItems – menu items added by restaurants

Restaurants – partner restaurants

---

📦 Future Enhancements

Image upload & optimization

Advanced meal suggestions using ML

In-app chat for customer support

Payment gateway integration

Notifications via email/SMS



---

📄 License

This project was built as part of the SmartInternz Program and is open to contributions and enhancements. Feel free to fork and improve it!

