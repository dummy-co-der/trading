import { ChevronDown } from "lucide-react";
import { SelectFieldProps } from "#interfaces";

export const SelectField = ({
    label,
    value,
    onChange,
    options,
    placeholder = "Select an option",
    disabled = false,
}: SelectFieldProps) => (
    <div className="mb-4 space-y-2">
        <label className="block text-sm font-medium text-muted-foreground">{label}</label>
        <div className="relative">
            <select
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="w-full appearance-none py-2 pl-3 pr-10 rounded-md border border-border bg-background text-foreground"
            >
                <option value="" disabled hidden>
                    {placeholder}
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <ChevronDown className="h-4 w-4" />
            </div>
        </div>
    </div>
);
