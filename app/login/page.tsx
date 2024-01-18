"use client";
import React, { useState } from "react";
import supabase from "../supabasee";
import Link from "next/link";

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  interface FormData {
    email: string;
    password: string;
  }
  console.log(formData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
    } catch (error: any) {
      alert(error);
    }
  }
  return (
    <div>
      <h1>Login Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            // value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            // value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
