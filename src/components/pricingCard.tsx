import { PriceCardProps } from "#interfaces";
import { Check } from "lucide-react";

export const PricingCard = ({
    title,
    price,
    duration,
    forWhom,
    features,
    mostPopular,
    buttonText,
}: PriceCardProps) => {
    return (
        <div className="h-full">
            <div className={`bg-white h-full flex flex-col justify-between p-8 rounded-xl shadow-md relative ${mostPopular ? "border-2 border-blue-600" : ""}`}>
                <div>
                    {mostPopular && (
                        <div className="absolute top-0 right-8 transform -translate-y-1/2">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                Most Popular
                            </span>
                        </div>
                    )}
                    <h3 className="text-xl font-semibold mb-4">{title}</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">{price}</span>
                        {duration && <span className="text-gray-600">{duration}</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{forWhom}</p>
                    <ul className="space-y-4">
                        {features?.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <Check className="h-5 w-5 text-blue-600 mr-2" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className={`mt-8 w-full cursor-pointer py-2 px-4 rounded-lg ${mostPopular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-white border border-blue-600 text-black hover:bg-blue-600 hover:text-white"} transition`}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};
