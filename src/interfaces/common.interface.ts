export interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    prefix?: string;
    icon?: React.ReactNode;
}

export interface TextAreaFieldProps {
    label: string;
    placeholder: string;
};