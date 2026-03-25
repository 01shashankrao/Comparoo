import React, { useState } from "react";
import { saveProduct } from "../services/user";

export default function AddProductfrom(){
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [link,setLink] = useState("");
  const email = localStorage.getItem("email");

  const submit = async () => {
    if (!email) return alert("Login required");
    const product = { id: Date.now().toString(), title, price, link, image: "/assets/home.png", features: [] };
    try {
      await saveProduct(email, product);
      alert("Product saved");
      setTitle(""); setPrice(""); setLink("");
    } catch (err) {
      alert("Error saving product");
    }
  };

  return (
    <div style={{ maxWidth: 640, margin: "12px auto", padding: 16, background:"rgba(255,255,255,0.04)",borderRadius:12 }}>
      <h3>Add Product</h3>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" />
      <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" />
      <input value={link} onChange={e=>setLink(e.target.value)} placeholder="Product link" />
      <button onClick={submit} className="btn-primary">Add Product</button>
    </div>
  );
}
