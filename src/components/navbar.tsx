import { LineChart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "#context";

export const NavBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { isAuthenticated, logout } = useAuth();
    const isSignUpPage = pathname === "/signup";
    const publicNavLinks = [
        { label: "Pricing", href: "/pricing" },
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
    ];
    const privateNavLinks = [
        { label: "Portfolio", href: "/portfolio" },
        { label: "Strategy", href: "/strategy" },
        { label: "Screener", href: "/screener" },
        { label: "Simulator", href: "/simulator" },
    ];
    const renderAuthButton = () => {
        if (isAuthenticated) {
            return (
                <button
                    onClick={() => {
                        logout();
                        navigate("/");
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                >
                    Logout
                </button>
            );
        }
        const label = isSignUpPage ? "Login" : "Sign Up";
        const to = isSignUpPage ? "/login" : "/signup";

        return (
            <button
                onClick={() => navigate(to)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
                {label}
            </button>
        );
    };
    const navLinks = isAuthenticated ? privateNavLinks : publicNavLinks;

    return (
        <div className="border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <LineChart className="h-8 w-8 text-blue-600" />
                        <span
                            onClick={() => navigate(isAuthenticated ? "/portfolio" : "/")}
                            className="ml-2 text-2xl font-bold text-gray-900 cursor-pointer"
                        >
                            Trading Studio
                        </span>
                    </div>

                    <div className="hidden md:flex justify-center items-center space-x-8">
                        {navLinks.map(({ label, href }) => (
                            <a key={label} href={href} className="text-gray-600 hover:text-blue-600">
                                {label}
                            </a>
                        ))}
                        {renderAuthButton()}
                    </div>
                </div>
            </nav>
        </div>
    );
};
