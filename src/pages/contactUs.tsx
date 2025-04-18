import { InputField, TextAreaField } from "#common";
import { useState } from "react";

export const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="flex pt-20 justify-center items-center">
                <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">Contact Us</h2>
                    <p className="text-md text-gray-500 text-center mt-2">We'd love to hear from you!</p>

                    <form className="mt-6">
                        <InputField
                            label="Your Name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <InputField
                            label="Your Email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextAreaField
                            label="Your Message"
                            placeholder="Write your message..."
                        />

                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
