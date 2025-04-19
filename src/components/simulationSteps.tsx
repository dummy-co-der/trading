import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { InputField, SelectField, InfoBox } from "#common";
import { exchangeOptions, instrumentOptions, sortingOptions } from "#constants";

// Scanner Step
export const ScannerStep = () => {
    const [exchange, setExchange] = useState("");
    const [instrumentType, setInstrumentType] = useState("");
    const [minPriceGrowth, setMinPriceGrowth] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [marketCapRank, setMarketCapRank] = useState(0);
    const [avgDailyValue, setAvgDailyValue] = useState(0);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                <SelectField
                    label="Exchange"
                    value={exchange}
                    onChange={(e) => setExchange(e.target.value)}
                    options={exchangeOptions}
                />
                <SelectField
                    label="Instrument Type"
                    value={instrumentType}
                    onChange={(e) => setInstrumentType(e.target.value)}
                    options={instrumentOptions}
                />
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Price Criteria</h3>
                <div className="grid grid-cols-2 gap-6">
                    <InputField
                        type="number"
                        label="Minimum Price Growth (300 days)"
                        value={minPriceGrowth}
                        placeholder="0"
                        onChange={(e) => setMinPriceGrowth(Number(e.target.value))}
                        suffix="%"
                    />
                    <InputField
                        type="number"
                        label="Minimum Price"
                        value={minPrice}
                        placeholder="99"
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        prefix="₹"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Market Cap & Volume</h3>
                <div className="grid grid-cols-2 gap-6">
                    <InputField
                        type="number"
                        label="Market Cap Rank (Top %)"
                        value={marketCapRank}
                        onChange={(e) => setMarketCapRank(Number(e.target.value))}
                        placeholder="10"
                    />
                    <InputField
                        type="number"
                        label="Min. Avg Daily Value (90 days)"
                        value={avgDailyValue}
                        onChange={(e) => setAvgDailyValue(Number(e.target.value))}
                        placeholder="300000000"
                    />
                </div>
            </div>
        </div>
    );
};

// Buy Rules Step
export const BuyStep = () => {

    return (
        <div className="space-y-6">
            <InfoBox
                icon={<AlertTriangle className="h-5 w-5" />}
                title="Buy Trigger Rules"
                description="Define conditions that must be met for a buy order to be placed."
                color="blue"
            />

            <div className="space-y-3">
                <label className="flex items-start gap-2 text-sm text-foreground">
                    <input
                        type="checkbox"
                        onChange={(e) => console.log(e.target.checked)}
                        className="mt-1"
                    />
                    Last price is greater than or equal to last 30 day close
                </label>
                <label className="flex items-start gap-2 text-sm text-foreground">
                    <input
                        type="checkbox"
                        onChange={(e) => console.log(e.target.checked)}
                        className="mt-1"
                    />
                    Last price is greater than or equal to moving average
                </label>
            </div>

            <InputField
                label="Moving Average Period (Days)"
                value={30}
                onChange={(e) => console.log(e.target.value)}
                type="number"
                placeholder="30"
            />
        </div>
    );
};

// Sell Rules Step
export const SellStep = () => {
    return (
        <div className="space-y-6">
            <InfoBox
                icon={<AlertTriangle className="h-5 w-5" />}
                title="Sell Trigger Rules"
                description="Define conditions that will trigger the closing of positions."
                color="red"
            />

            <div className="mt-1 relative rounded-md shadow-sm">
                <InputField
                    label="Trailing Stop Loss (%)"
                    value={10}
                    onChange={(e) => console.log(e.target.value)}
                    type="number"
                    placeholder="10"
                    suffix="%"
                />
            </div>

            <InputField
                label="Minimum Holding Period (Days)"
                value={5}
                onChange={(e) => console.log(e.target.value)}
                type="number"
                placeholder="5"
            />

            <InfoBox
                icon={<AlertTriangle className="h-5 w-5" />}
                title="Important Note"
                description="Positions will not be exited before the minimum holding period, regardless of other conditions."
                color="yellow"
            />
        </div>
    );
};

// Simulation Step
export const SimulationStep = () => {
    const [sortingType, setSortingType] = useState("");

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                <InputField
                    type="number"
                    placeholder="100000"
                    onChange={(e) => console.log(e.target.value)}
                    label="Initial Margin"
                    value={100000}
                    prefix="₹"
                />
                <InputField
                    type="number"
                    placeholder="20"
                    label="Maximum Positions"
                    value={20}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <InputField
                    type="date"
                    label="Start Date"
                    value="2024-01-01"
                    onChange={(e) => console.log(e.target.value)}
                />
                <InputField
                    type="date"
                    label="End Date"
                    value="2024-01-01"
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>

            <SelectField
                label="Order Sorting Type"
                value={sortingType}
                onChange={(e) => setSortingType(e.target.value)}
                options={sortingOptions}
            />

            <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Additional Settings</h3>
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Max Positions per Instrument</span>
                        <span className="font-medium text-gray-900">1</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Position Sizing</span>
                        <span className="font-medium text-gray-900">Equal Weight</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
