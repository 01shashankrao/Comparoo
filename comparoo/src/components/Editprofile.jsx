import React, { useState } from "react";
import { updateProfile } from "../services/user";

export default function EditProfile(){
  const storedEmail = localStorage.getItem("email");
  const [newEmail, setNewEmail] = useState(storedEmail || "");
  const [name, setName] = useState("");
  const email = storedEmail;

  const save = async () => {
    if (!email) return alert("Login first");
    try {
      const res = await updateProfile(email, { email: newEmail, name });
      if (res.data?.ok) {
        if (newEmail) localStorage.setItem("email", newEmail);
        alert("Profile updated");
      }
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div style={{ maxWidth:600, margin:"20px auto", padding:16 }}>
      <h3>Edit Profile</h3>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" value={newEmail} onChange={e=>setNewEmail(e.target.value)} />
      <button onClick={save} className="btn-primary">Save</button>
    </div>
  );
}
