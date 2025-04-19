import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Footer } from "#components";
import { InputField } from "#common";

export const Strategy = () => {
    const navigate = useNavigate();
    const [strategyName, setStrategyName] = useState("");
    const isInputValid = strategyName.trim() !== "";
    const buttonClasses = isInputValid
        ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed";

    return (
        <div className="h-full flex flex-col gap-24 bg-gray-50">
            <div className="bg-gray-50 mb-10 flex-1">
                <div className="flex justify-center items-center mt-16">
                    <div className="bg-white min-w-4xl rounded-xl shadow-lg min-h-80 p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mt-2 text-center">
                            Create a Strategy
                        </h3>
                        <p className="text-center mt-2 text-md text-gray-500">
                            to simulate returns
                        </p>

                        <div className="flex justify-center items-center mt-8">
                            <div className="w-full max-w-md">
                                <InputField
                                    type="text"
                                    label="Strategy Name"
                                    value={strategyName}
                                    onChange={(e) => setStrategyName(e.target.value)}
                                    placeholder="Enter strategy name"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-10">
                            <button
                                className={`px-4 py-2 rounded-lg transition ${buttonClasses}`}
                                disabled={!isInputValid}
                                onClick={() => navigate("/screener")}
                            >
                                BEGIN
                            </button>
                        </div>

                        <div className="border-t border-gray-200 mx-10 mt-8"></div>
                        <p className="text-gray-500 text-center mt-6">
                            Or Test with Built-in strategies
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
