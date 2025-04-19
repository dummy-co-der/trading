import { InputFieldProps } from "#interfaces";

export const InputField = ({
    label,
    type,
    value,
    onChange,
    placeholder = "",
    prefix,
    icon,
    suffix,
}: InputFieldProps) => (
    <div className="mb-4 space-y-2">
        <label className="block text-sm font-medium text-muted-foreground">{label}</label>
        <div className="relative">
            {prefix && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {prefix}
                </span>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full ${prefix ? "pl-7" : "pl-3"} ${icon ? "pr-10" : "pr-3"} py-2 rounded-md border border-border`}
            />
            {icon && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {icon}
                </span>
            )}
            {suffix && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {suffix}
                </span>
            )}
        </div>
    </div>
);
