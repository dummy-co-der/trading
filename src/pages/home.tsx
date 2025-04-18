import { Footer } from "#components";
import { features } from "#constants";
import { InputField } from "#common";
import { CalendarIcon, TrendingUpIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [initialInvestment, setInitialInvestment] = useState("");
    const [monthlyGrowth, setMonthlyGrowth] = useState("");
    const navigate = useNavigate();

    const calculateProjectedValue = () => {
        const months = getMonthDifference(startDate, endDate);
        const initial = parseFloat(initialInvestment);
        const growth = parseFloat(monthlyGrowth);
        if (isNaN(initial) || isNaN(growth) || months < 0) return "0.00";
        const growthRate = growth / 100;
        const projectedValue = initial * Math.pow(1 + growthRate, months);
        return projectedValue.toFixed(2);
    };

    const getMonthDifference = (start: string, end: string) => {
        const [sMonth, sDay, sYear] = start.split("/").map(Number);
        const [eMonth, eDay, eYear] = end.split("/").map(Number);
        const startDate = new Date(sYear, sMonth - 1, sDay);
        const endDate = new Date(eYear, eMonth - 1, eDay);
        return (
            (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            (endDate.getMonth() - startDate.getMonth())
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section id="start-building" className="pt-20 pb-8">
                <div className="container max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center animate-fade-in">
                    {/* Left Text Section */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold font-sans leading-tight">
                            Dynamic Returns <br />
                            <span className="text-blue-700">Calculator</span>
                        </h1>
                        <p className="text-lg text-muted-foreground my-6 max-w-md">
                            Calculate your potential returns with our advanced trading analytics platform. Make informed decisions with real-time data and comprehensive analysis tools.
                        </p>
                        <div className="flex gap-4 mb-6">
                            <button onClick={() => navigate("/pricing")} className="bg-blue-600 text-white w-32 cursor-pointer px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black border border-transparent hover:border-black transition flex justify-center items-center">
                                Get Started
                            </button>
                            <button onClick={() => navigate("/contact")} className="bg-white text-black w-32 cursor-pointer px-4 py-2 rounded-lg text-sm border border-black hover:bg-blue-600 hover:text-white transition flex justify-center items-center">
                                Learn More
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUpIcon size={20} className="text-blue-600" />
                            <span className="text-sm">
                                Advanced algorithmic analysis to maximize returns
                            </span>
                        </div>
                    </div>

                    {/* Right Calculator Card */}
                    <div className="bg-white p-6 rounded-2xl">
                        <div className="p-5 border-b">
                            <h3 className="text-xl font-semibold text-center">
                                Return Calculator
                            </h3>
                        </div>

                        <div className="p-5 space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <InputField
                                    icon={
                                        <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    }
                                    type="text"
                                    label="Start Date"
                                    placeholder="01/01/2025"
                                    value={startDate}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
                                />
                                <InputField
                                    icon={
                                        <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    }
                                    type="text"
                                    label="End Date"
                                    placeholder="21/04/2025"
                                    value={endDate}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}
                                />
                            </div>

                            <InputField
                                label="Initial Investment"
                                value={initialInvestment}
                                onChange={(e) => setInitialInvestment(e.target.value)}
                                prefix="$"
                                type="number"
                                placeholder="100"
                            />

                            <InputField
                                type="number"
                                label="Monthly Growth (%)"
                                value={monthlyGrowth}
                                onChange={(e) => setMonthlyGrowth(e.target.value)}
                                placeholder="20"
                            />

                            {/* Projected Result */}
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">Projected Value:</span>
                                    <span className="text-xl font-bold text-blue-700">
                                        ${calculateProjectedValue()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 border-t">
                            <button onClick={() => navigate("/signup")} className="bg-blue-600 cursor-pointer text-white w-full px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black border border-transparent hover:border-black transition flex justify-center items-center">
                                Run Full Simulation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl font-bold mb-4">Key Platform Features</h2>
                        <p className="text-muted-foreground">
                            Optimize your trading decisions with our comprehensive toolkit
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map(({ icon: Icon, title, description }, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl hover:shadow-lg transition"
                            >
                                <div className="text-blue-600 mb-4">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-gray-600">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
