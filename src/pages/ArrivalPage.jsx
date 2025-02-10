import { useState } from "react";
import { auth } from "../services/firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ArrivalPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleAuth = async () => {
    setError(""); // Reset error before authentication attempt
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (error) {
      setError(error.message); // Store error message in state
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h1>
      
      {/* Error message */}
      {error && <p className="text-red-500 bg-red-100 p-2 mb-3 rounded">{error}</p>}
      
      {/* Email Input */}
      <div className="w-72 mb-3">
        <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-2 border rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      {/* Password Input */}
      <div className="w-72 mb-4">
        <label htmlFor="password" className="block font-semibold mb-1">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="p-2 border rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-72" onClick={handleAuth}>
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>
      
      <button className="text-blue-600 mt-2" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Sign In" : "Create an account"}
      </button>
    </div>
  );
};

export default ArrivalPage;
