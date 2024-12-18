import { useState } from "react";
import SignupForm from "./SignUpFrom";
import LoginForm from "./LoginForm";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => setIsSignUp((prev) => !prev);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-[900px] h-[550px] rounded-lg shadow-2xl overflow-hidden bg-white">
        {/* Sliding Forms */}
        <div
          className={`absolute top-0 left-0 w-[200%] h-full flex transition-transform duration-700 ${
            isSignUp ? "translate-x-[-50%]" : "translate-x-0"
          }`}
        >
          {/* Signup Form - Left Side */}
          <div className="w-1/2 flex items-start justify-end pt-16 bg-white z-20 m-10">
            <SignupForm onToggle={toggleForm} />
          </div>

          {/* Login Form - Right Side */}
          <div className="w-1/2 flex items-start justify-start pt-16 bg-white z-20 m-10">
            <LoginForm onToggle={toggleForm} />
          </div>
        </div>

        {/* Overlay Panel */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-indigo-600 text-white flex items-center justify-center transition-transform duration-700 ${
            isSignUp ? "translate-x-full" : "translate-x-0"
          } z-10`}
        >
          {isSignUp ? (
            <div className="text-center">
              <h3 className="text-lg mb-4">
                Already have an account? Just sign in.
              </h3>
              <button
                onClick={toggleForm}
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-800 transition"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-lg mb-4">
                Don’t have an account? Please Sign up!
              </h3>
              <button
                onClick={toggleForm}
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-800 transition"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
