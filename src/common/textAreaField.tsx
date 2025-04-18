import { TextAreaFieldProps } from "#interfaces";

export const TextAreaField = ({
    label,
    placeholder = "",
}: TextAreaFieldProps) => (
    <div className="mb-4 space-y-2">
        <label className="block text-sm font-medium text-muted-foreground">{label}</label>
        <textarea
            placeholder={placeholder}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
        />
    </div>
);
