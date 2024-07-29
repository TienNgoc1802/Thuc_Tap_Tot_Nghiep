import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import Home from "./pages/user/Home";
import ProductDetail from "./pages/user/ProductDetail";
import Cart from "./pages/user/Cart";
import Shop from "./pages/user/Shop";
import PolicySecurity from "./pages/user/PolicySecurity";
import Warranty from "./pages/user/Warranty";
import ReturnPolicy from "./pages/user/ReturnPolicy";
import ShippingAndInspectionPolicy from "./pages/user/ShippingInspectionPolicy";
import { AppProvider } from "./context/AppContext";
import { Toaster } from "react-hot-toast";
import Search from "./pages/user/Search";
import CheckOut from "./pages/user/CheckOut";
import Account from "./pages/user/Account";
import Dashboard from "./pages/admin/Dashboard";
import Category from "./pages/admin/Category";
import Order from "./pages/admin/Order";
import OrderDetail from "./pages/admin/OrderDetail";
import User from "./pages/admin/User";
import AddUser from "./pages/admin/AddUser";
import EditUser from "./pages/admin/EditUser";
import Promotion from "./pages/admin/Promotion";

const App = () => {
	return (
		<BrowserRouter>
			<AppProvider>
				<Toaster position="top-right" reverseOrder={false} />
				<AppContent />
			</AppProvider>
		</BrowserRouter>
	);
};

const AppContent = () => {
	const location = useLocation();
	const isSignInPage =
		location.pathname === "/signin" ||
		location.pathname === "/signup" ||
		location.pathname === "/checkout";
	const isAdminPage = location.pathname.startsWith("/admin");

	return (
		<>
			{window.scrollTo(0, 0)}
			{!isSignInPage && !isAdminPage && <Header currentPage="home" />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/products/:product_id" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/collections/all" element={<Shop />} />
				<Route path="/chinh-sach-bao-mat" element={<PolicySecurity />} />
				<Route path="/qui-dinh-bao-hanh" element={<Warranty />} />
				<Route path="/chinh-sach-doi-tra" element={<ReturnPolicy />} />
				<Route
					path="/chinh-sach-van-chuyen-va-kiem-hang"
					element={<ShippingAndInspectionPolicy />}
				/>
				<Route path="/search" element={<Search />} />
				<Route path="/checkout" element={<CheckOut />} />
				<Route path="/account" element={<Account />} />
				<Route path="/admin">
                    <Route path="dashboard" element={<Dashboard />} />
					<Route path="category" element={<Category />} />
					<Route path="order" element={<Order />} />
					<Route path="order-detail/:order_id" element={<OrderDetail />} />
					<Route path="order" element={<Order />} />
                    <Route path="users" element={<User />} />
					<Route path="users/add-user" element={<AddUser />} />
					<Route path="users/edit-user/:user_id" element={<EditUser />} />
					<Route path="promotion" element={<Promotion />} />
                </Route>
			</Routes>
			{!isSignInPage && !isAdminPage && <Footer />}
		</>
	);
};

export default App;
