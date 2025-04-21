export interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    prefix?: string;
    icon?: React.ReactNode;
    suffix?: string;
}

export interface TextAreaFieldProps {
    label: string;
    placeholder: string;
};

export interface SelectFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { label: string; value: string }[];
    placeholder?: string;
    prefix?: React.ReactNode;
    icon?: React.ReactNode;
    suffix?: React.ReactNode;
    disabled?: boolean;
}

export interface InfoBoxProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    color: "blue" | "red" | "yellow" | "green" | "gray";
}