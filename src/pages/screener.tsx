import { BuyStep, Footer, ScannerStep, SellStep, SimulationStep } from "#components";
import { Search, TrendingUp, ArrowDownToLine, PlayCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Step = 'scanner' | 'buy' | 'sell' | 'simulation';

export const Screener = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState<Step>('scanner');
    const steps = [
        { id: 'scanner', name: 'Scanner', icon: Search },
        { id: 'buy', name: 'Buy Rules', icon: TrendingUp },
        { id: 'sell', name: 'Sell Rules', icon: ArrowDownToLine },
        { id: 'simulation', name: 'Simulation', icon: PlayCircle },
    ];
    const handleNext = () => {
        const currentIndex = steps.findIndex(step => step.id === currentStep);
        if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1].id as Step);
        }
    };
    const handleBack = () => {
        const currentIndex = steps.findIndex(step => step.id === currentStep);
        if (currentIndex > 0) {
            setCurrentStep(steps[currentIndex - 1].id as Step);
        } else {
            navigate('/strategy');
        }
    };
    const handleStartSimulation = () => {
        navigate('/simulator');
    };
    const renderStepContent = () => {
        switch (currentStep) {
            case 'scanner':
                return <ScannerStep />;
            case 'buy':
                return <BuyStep />;
            case 'sell':
                return <SellStep />;
            case 'simulation':
                return <SimulationStep />;
            default:
                return null;
        }
    };
    const renderStepIndicator = () => (
        <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isCurrent = currentStep === step.id;
                    const isCompleted = steps.findIndex(s => s.id === currentStep) > index;

                    return (
                        <div key={step.id} className="flex items-center">
                            <div className={`flex items-center ${index !== 0 ? 'flex-1' : ''}`}>
                                {index !== 0 && (
                                    <div className={`flex-1 h-0.5 ${isCompleted ? 'bg-blue-600' : 'bg-gray-200'}`} />
                                )}
                                <div
                                    className={`
                                        w-10 h-10 rounded-full flex items-center justify-center
                                        ${isCurrent ? 'bg-blue-600 text-white' :
                                            isCompleted ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}
                                    `}
                                >
                                    <StepIcon className="h-5 w-5" />
                                </div>
                            </div>
                            <span className={`ml-3 text-sm font-medium ${isCurrent ? 'text-blue-600' : 'text-gray-500'}`}>
                                {step.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="h-full flex flex-col gap-24 bg-gray-50">
            <div className="flex-1 pt-12 px-4">
                {renderStepIndicator()}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">
                            {steps.find(step => step.id === currentStep)?.name}
                        </h2>
                        {renderStepContent()}

                        <div className="mt-8 flex justify-between">
                            <button
                                onClick={handleBack}
                                className="cursor-pointer items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Back
                            </button>

                            <div className="flex space-x-4">
                                {currentStep === 'simulation' ? (
                                    <button
                                        onClick={handleStartSimulation}
                                        className="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        Start Simulation
                                        <ChevronRight className="h-4 w-4 ml-2" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleNext}
                                        className="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        Continue
                                        <ChevronRight className="h-4 w-4 ml-2" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
