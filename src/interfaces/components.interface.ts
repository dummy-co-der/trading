export interface PriceCardProps {
    title: string;
    price: string;
    duration?: string;
    forWhom: string;
    features: string[];
    mostPopular?: boolean;
    buttonText: string;
}

export interface CalculatorCardProps {
    startDate: string;
    endDate: string;
    initialInvestment: string;
    monthlyGrowth: string;
    setStartDate: (val: string) => void;
    setEndDate: (val: string) => void;
    setInitialInvestment: (val: string) => void;
    setMonthlyGrowth: (val: string) => void;
    onRun: () => void;
}

export interface PortfolioCardProps {
    groupName: string;
    startMargin: number;
    perValue: number;
    maxHolding: number;
    onDelete: () => void;
    onEdit: () => void;
    onCancel: () => void;
    onSave: () => void;
    isEditing: boolean;
    editedData?: Partial<PortfolioCardProps>;
    onChange?: (field: keyof PortfolioCardProps, value: string) => void;
}

export interface PortfolioGroup {
    id: string;
    name: string;
    startMargin: number;
    perValue: number;
    maxHolding: number;
}
