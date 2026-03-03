"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"teacher" | "student">("student");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Account created successfully!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-8 bg-white rounded-xl p-8 w-full max-w-md shadow-lg text-black">
      <h2 className="text-xl font-bold mb-6 text-center">
        Register to continue
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full border rounded-md px-4 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create password"
          className="w-full border rounded-md px-4 py-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Role */}
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={role === "teacher"}
              onChange={() => setRole("teacher")}
            />
            Teacher
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={role === "student"}
              onChange={() => setRole("student")}
            />
            Student / Parent
          </label>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-md"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <div className="text-center text-sm mt-6">
        Or continue with:
      </div>

      <div className="space-y-3 mt-4">
        <button className="w-full border py-2 rounded-md">Google</button>
        <button className="w-full border py-2 rounded-md">Microsoft</button>
        <button className="w-full border py-2 rounded-md">Apple</button>
      </div>
    </div>
  );
}
