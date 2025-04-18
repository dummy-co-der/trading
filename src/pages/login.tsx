import { InputField } from "#common";
import { useAuth } from "#context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock API call to validate credentials and get a token
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const { email: storedEmail, password: storedPassword, token } = JSON.parse(storedUser);
            if (email === storedEmail && password === storedPassword) {
                // Use the token provided (mock token in this case)
                login(token); // Store the token and set authenticated state
                navigate("/portfolio"); // Redirect to portfolio page
            } else {
                alert("Invalid credentials!");
            }
        } else {
            alert("No user found. Please sign up first.");
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="flex pt-20 justify-center items-center">
                <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">Login</h2>
                    <p className="text-md text-gray-500 text-center mt-2">Please enter your email and password to login.</p>

                    <form onSubmit={handleLogin} className="mt-6">
                        <InputField
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-center mt-6">
                            <button type="submit" className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
