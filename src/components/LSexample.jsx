import { useState } from "react";

export default function LSexample() {
  const [user, setUser] = useState({
    name: "Fabio",
    email: "ing.fabio.arg@gmail.com",
    type: "standar",
    score: 96,
  });
  localStorage.setItem("user", JSON.stringify(user));
  return <div>LSexample</div>;
}
