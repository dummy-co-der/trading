import { PricingCard } from "#components";
import { pricingPlans } from "#constants";
import { Link } from "react-router-dom";

export const Pricing = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Simple, transparent pricing
                        </h1>
                        <p className="text-xl text-gray-600">
                            Choose the perfect plan for your trading needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard
                                key={index}
                                title={plan.title}
                                price={plan.price}
                                duration={plan.duration}
                                forWhom={plan.forWhom}
                                mostPopular={plan.mostPopular}
                                buttonText={plan.buttonText}
                                features={plan.features}
                            />
                        ))}
                    </div>
                    <Link to="/faq" className="flex pt-12 justify-center items-center text-blue-600 hover:text-blue-700"> Have questions? Check our FAQ </Link>
                </div>
            </div>
        </div>
    );
};
