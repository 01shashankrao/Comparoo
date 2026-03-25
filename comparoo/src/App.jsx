import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import BestPick from "./components/BestPick";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import ShareCard from "./components/ShareCard";
import AddProductForm from "./components/AddProductForm";
import EditProfile from "./components/EditProfile";
import ComparePage from "./components/ComparePage";
import ProductCard from "./components/ProductCard"; // ✅ correct import

export default function App() {
  // ✅ sample product to avoid undefined crash
  const products = [
    {
      id: 1,
      title: "Sample Product",
      price: 999,
      image: "https://via.placeholder.com/200",
      rating: { rate: 4.5 },
      description: "This is a demo product for routing safety",
      features: ["Feature A", "Feature B"]
    }
  ];

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bestpick" element={<BestPick />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/share" element={<ShareCard />} />
      <Route path="/add-product" element={<AddProductForm />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/compare" element={<ComparePage products={products} />} />

      {/* ✅ safe route */}
      <Route
        path="/product"
        element={<ProductCard product={products[0]} />}
      />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
