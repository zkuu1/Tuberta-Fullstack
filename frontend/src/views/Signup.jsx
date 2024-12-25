import { Navigate, Link } from "react-router-dom";
import { useRef, useState } from "react"; // Tambahkan useState
import AxiosClient from "../axios-client";
import { useStateContext } from "../Context/ContextProvider";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState(null); // Gunakan useState dengan null
  const confirmPasswordRef = useRef(); // Perbaiki typo
  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();

    // Log untuk memastikan input
    console.log("Submitting form...");
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Confirm Password:", confirmPasswordRef.current.value);

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value, // Perbaiki typo
    };

    // Log payload sebelum dikirim
    console.log("Payload:", payload);

    AxiosClient.post("/signup", payload)
      .then(({ data }) => {
        // Log respons sukses
        console.log("Signup Success:", data);
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        // Log error jika ada
        console.error("Signup Error:", err);

        const response = err.response;
        if (response && response.status === 422) {
          console.log("Validation Errors:", response.data.errors);
          setErrors(response.data.errors || {});
        }
      });
  };

  return (
    <div className="bg-MAIN h-screen flex items-center justify-center">
      <div className="flex flex-col items-center p-6 w-1/3 bg-white rounded-lg shadow-lg">
        <p className="text-PrimFont font-lexend text-3xl mb-6 ">Sign up to Tuberta</p>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
          {errors && (
            <div className="alert">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}
          <input
            ref={nameRef}
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-THIRD rounded-md focus:outline-none text-white placeholder-white"
            required
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-THIRD rounded-md focus:outline-none text-white placeholder-white"
            required
          />
          <div className="relative">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-THIRD rounded-md focus:outline-none text-white placeholder-white"
              required
            />
          </div>
          <div className="relative">
            <input
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 bg-THIRD rounded-md focus:outline-none text-white placeholder-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-PrimFont text-black rounded-md hover:bg-HOVER focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-sm">
          Already Registered?{" "}
          <Link to="/login" className="text-[#FFCC00] underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
