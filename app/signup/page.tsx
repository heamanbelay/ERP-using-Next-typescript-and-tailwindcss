"use client";
import React, { useState } from "react";
import supabase from "../supabasee";
import Link from "next/link";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });
  interface FormData {
    fullName: string;
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

  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_Name: formData.fullName,
          },
        },
      });

      if (error) throw error;

      alert("Check your email for the verification link");
    } catch (error: any) {
      alert(error);
    }
  }
  return (
    <div>
      <h1>Signup Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            name="fullName"
            // value={formData.fullName}
            onChange={handleChange}
          />
        </div>
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
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>{" "}
      </form>
    </div>
  );
};

export default SignUp;

// import React from 'react';
// import Link from 'next/link';

// const Homee: React.FC = () => {
//     return (
//       <div>
//         <h1>Welcome to the Home Page</h1>
//         {/* <p> <Link href="/signup">Sign Up </Link> </p> */}
//         <p> <Link href="/login">Log In </Link> </p>

//       </div>
//     );
//   };

//   export default Homee;
