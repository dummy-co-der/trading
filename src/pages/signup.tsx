import { InputField } from "#common";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate storing credentials
        localStorage.setItem("user", JSON.stringify({ email, password, firstName, lastName }));
        alert("Signup successful! You can now login.");
        navigate("/login");
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="flex pt-20 justify-center items-center">
                <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">Sign Up</h2>
                    <p className="text-md text-gray-500 text-center mt-2">Please enter your details to sign up.</p>

                    <form onSubmit={handleSignup} className="mt-6">
                        <div className="flex gap-4">
                            <InputField
                                label="First Name"
                                type="text"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                            />
                            <InputField
                                label="Last Name"
                                type="text"
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                            />
                        </div>
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
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
