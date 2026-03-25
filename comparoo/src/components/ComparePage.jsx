import React, { useState } from "react";
import { saveCompare } from "../Services/compare";

export default function ComparePage({ products }) {
  const [selected, setSelected] = useState([]);
  const email = localStorage.getItem("email");

  const toggle = (id) => {
    setSelected(s => s.includes(id) ? s.filter(x=>x!==id) : [...s,id]);
  };

  const handleSave = async () => {
    if (!email) return alert("Login required");
    const chosen = products.filter(p => selected.includes(p.id));
    await saveCompare(email, chosen);
    alert("Comparison saved");
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Compare</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:16 }}>
        {products.map(p => (
          <div key={p.id} style={{ padding:12, background:"rgba(255,255,255,0.04)", borderRadius:12 }}>
            <h4>{p.title}</h4>
            <p>{p.price}</p>
            <label><input type="checkbox" checked={selected.includes(p.id)} onChange={()=>toggle(p.id)} /> Select</label>
          </div>
        ))}
      </div>
      <button disabled={selected.length < 2} onClick={handleSave} className="btn-primary">
        Save Compare ({selected.length})
      </button>
    </div>
  );
}
