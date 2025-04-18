import { LineChart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center mb-8">
                    <LineChart className="h-8 w-8 text-blue-500" />
                    <span className="ml-2 text-xl font-bold text-white">Trading Studio</span>
                </div>
                <p className="text-center text-sm">
                    © {new Date().getFullYear()} Trading Studio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
