"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loading } = useAuth();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Attempting sign in with:", email, password);
      await login(email, password);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to sign in. Please try again.";
      setError(errorMessage);
      console.error("Sign in error:", errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-start">Welcome back</h2>
          <p className="text-start text-gray-600">
            Please Enter Your Details to Sign In
          </p>
        </div>

        {error && (
          <div
            className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-lg"
            role="alert"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-semibold text-blue-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-blue-900"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-[#071487] text-white font-medium rounded-md transition-colors"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
