import { LineChart, Menu, X } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "#context";
import { useState } from "react";

export const NavBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { isAuthenticated, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                onClick={() => {
                    navigate(to);
                    setMobileMenuOpen(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
                {label}
            </button>
        );
    };

    const navLinks = isAuthenticated ? privateNavLinks : publicNavLinks;
    const getLinkClasses = (href: string) => {
        return pathname === href
            ? "text-blue-600 font-bold"
            : "text-gray-600 hover:text-blue-600";
    };

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

                    {/* Desktop Menu */}
                    <div className="hidden md:flex justify-center items-center space-x-8">
                        {navLinks.map(({ label, href }) => (
                            <Link
                                key={label}
                                to={href}
                                className={getLinkClasses(href)}
                            >
                                {label}
                            </Link>
                        ))}
                        {renderAuthButton()}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6 text-gray-800" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-800" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col space-y-4">
                        {navLinks.map(({ label, href }) => (
                            <Link
                                key={label}
                                to={href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={getLinkClasses(href)}
                            >
                                {label}
                            </Link>
                        ))}
                        {renderAuthButton()}
                    </div>
                )}
            </nav>
        </div>
    );
};
