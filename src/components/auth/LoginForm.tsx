"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://teachapt-backend-production.up.railway.app/auth/token", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  };

  return (
    <div className="mx-auto mt-8 bg-white rounded-xl p-8 w-full max-w-md shadow-lg text-black">
      <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-3 rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-3 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}
