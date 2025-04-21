import { Footer } from '#components';
import { InfoBox } from '#common';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { SIMULATOR_RESULTS } from '#constants';

export const Simulator = () => {
    const navigate = useNavigate();
    const metricCardClass = "bg-white rounded-lg shadow-md p-6";
    const labelClass = "text-lg font-medium text-gray-900";
    const progressBgClass = "w-full h-2 bg-gray-200 rounded-full mt-2";

    return (
        <div className="h-full flex flex-col gap-24 bg-gray-50">
            <div className="flex-1 pt-12 px-4">
                <div className="flex flex-col max-w-4xl mx-auto pt-8">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold text-gray-900">Simulator Results</h1>
                            <p className="text-muted-foreground">Tech Growth Strategy • Jan 2023 - Apr 2024</p>
                        </div>
                        <button
                            onClick={() => navigate('/strategy')}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                        >
                            Create New Strategy
                        </button>
                    </div>

                    <InfoBox
                        icon={<AlertTriangle className="h-5 w-5" />}
                        description="Define conditions that must be met for a buy order to be placed."
                        color="gray"
                        title=""
                    />
                </div>

                <div className="grid max-w-4xl mx-auto pt-8 grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
                    <div className={metricCardClass}>
                        <h3 className={labelClass}>Total Return</h3>
                        <p className="text-2xl font-bold text-green-600">+12.5%</p>
                        <p className="text-sm text-gray-600">Overall performance</p>
                    </div>

                    <div className={metricCardClass}>
                        <h3 className={labelClass}>Weekly Win Rate</h3>
                        <p className="text-2xl font-bold text-green-600">68.3%</p>
                        <p className="text-sm text-gray-600">Positive weeks</p>
                        <div className={progressBgClass}>
                            <div className="h-2 bg-green-600 rounded-full" style={{ width: '68.3%' }}></div>
                        </div>
                    </div>

                    <div className={metricCardClass}>
                        <h3 className={labelClass}>Max Drawdown</h3>
                        <p className="text-2xl font-bold text-red-600">-8.2%</p>
                        <p className="text-sm text-gray-600">Largest decline</p>
                        <div className={progressBgClass}>
                            <div className="h-2 bg-red-600 rounded-full" style={{ width: '8.2%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
                    <div className="px-6 py-4">
                        <h2 className="text-lg font-semibold">Recent Trades</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {['Date', 'Instrument', 'Type', 'Price', 'Quantity', 'P&L'].map((heading) => (
                                        <th key={heading} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                            {heading}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {SIMULATOR_RESULTS[0].recentTrades.map((trade, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trade.instrument}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${trade.type === 'BUY'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}
                                            >
                                                {trade.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{trade.price.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.quantity}</td>
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            ₹{trade.pnl.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
