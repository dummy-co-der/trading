// components/CalculatorCard.tsx
import { InputField } from "#common";
import { getMonthDifference } from "#utils";
import { CalculatorCardProps } from "#interfaces";
import { CalendarIcon } from "lucide-react";
import { useMemo } from "react";

export const CalculatorCard = ({
    startDate,
    endDate,
    initialInvestment,
    monthlyGrowth,
    setStartDate,
    setEndDate,
    setInitialInvestment,
    setMonthlyGrowth,
    onRun,
}: CalculatorCardProps) => {
    const projectedValue = useMemo(() => {
        const months = getMonthDifference(startDate, endDate);
        const initial = parseFloat(initialInvestment);
        const growth = parseFloat(monthlyGrowth);
        if (isNaN(initial) || isNaN(growth) || months < 0) return "0.00";
        const growthRate = growth / 100;
        return (initial * Math.pow(1 + growthRate, months)).toFixed(2);
    }, [startDate, endDate, initialInvestment, monthlyGrowth]);

    return (
        <div className="bg-gray-50 p-6 rounded-2xl">
            <div className="p-5 border-b">
                <h3 className="text-xl font-semibold text-center">Return Calculator</h3>
            </div>
            <div className="p-5 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                    <InputField
                        icon={<CalendarIcon className="h-4 w-4 text-muted-foreground" />}
                        type="text"
                        label="Start Date"
                        placeholder="01/01/2025"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <InputField
                        icon={<CalendarIcon className="h-4 w-4 text-muted-foreground" />}
                        type="text"
                        label="End Date"
                        placeholder="21/04/2025"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
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

                <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Projected Value:</span>
                        <span className="text-xl font-bold text-blue-700">${projectedValue}</span>
                    </div>
                </div>
            </div>
            <div className="p-5 border-t">
                <button
                    onClick={onRun}
                    className="bg-blue-600 text-white w-full px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black border border-transparent hover:border-black transition"
                >
                    Run Full Simulation
                </button>
            </div>
        </div>
    );
};
