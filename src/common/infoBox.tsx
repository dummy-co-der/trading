import { InfoBoxProps } from "#interfaces";

export const InfoBox = ({ icon, title, description, color }: InfoBoxProps) => {
    const colorMap = {
        blue: {
            bg: "bg-blue-50",
            border: "border-blue-100",
            titleText: "text-blue-800",
            descText: "text-blue-600",
        },
        red: {
            bg: "bg-red-50",
            border: "border-red-100",
            titleText: "text-red-800",
            descText: "text-red-600",
        },
        yellow: {
            bg: "bg-yellow-50",
            border: "border-yellow-100",
            titleText: "text-yellow-800",
            descText: "text-yellow-600",
        },
        green: {
            bg: "bg-green-50",
            border: "border-green-100",
            titleText: "text-green-800",
            descText: "text-green-600",
        },
        gray: {
            bg: "bg-gray-200",
            border: "border-gray-100",
            titleText: "text-gray-800",
            descText: "text-gray-600",
        },
    };

    const current = colorMap[color];

    return (
        <div className={`${current.bg} border ${current.border} rounded-lg p-4`}>
            <div className="flex items-start">
                {icon && <div className={`${current.titleText} mr-3 mt-0.5`}>{icon}</div>}
                <div>
                    <h4 className={`text-sm font-medium ${current.titleText}`}>{title}</h4>
                    <p className={`mt-1 text-sm ${current.descText}`}>{description}</p>
                </div>
            </div>
        </div>
    );
};
