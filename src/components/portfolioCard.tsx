import { PortfolioCardProps } from "#interfaces";
import { InputField } from "#common";
import { Edit, Trash2Icon } from "lucide-react";

export const PortfolioCard = ({
    groupName,
    startMargin,
    perValue,
    maxHolding,
    onDelete,
    onEdit,
    onCancel,
    onSave,
    isEditing,
    editedData,
    onChange,
}: PortfolioCardProps) => {

    const renderTextOrInput = (
        fieldKey: keyof PortfolioCardProps,
        value: string | number,
        inputLabel?: string
    ) => {
        const isCurrency = fieldKey === "startMargin";
        const displayValue = isCurrency && !isEditing ? `$${value}` : value;

        return isEditing ? (
            <InputField
                type="text"
                label={inputLabel ?? ""}
                value={(editedData?.[fieldKey] ?? value) as string | number}
                onChange={(e) => onChange?.(fieldKey, e.target.value)}
            />
        ) : (
            <div className="flex flex-col w-full">
                {inputLabel && (
                    <span className="text-sm text-gray-500 mb-1">{inputLabel}</span>
                )}
                <span className="font-semibold text-sm text-gray-800">{displayValue}</span>
            </div>
        );
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex flex-col gap-4">

                {isEditing && (
                    <h2 className="text-lg font-semibold text-gray-900">Edit Group</h2>
                )}

                <div className="flex justify-between items-center">
                    {renderTextOrInput("groupName", groupName, isEditing ? "Group Name" : undefined)}
                    {!isEditing && (
                        <div className="flex gap-2">
                            <Edit
                                className="w-5 h-5 text-blue-600 cursor-pointer"
                                onClick={onEdit}
                            />
                            <Trash2Icon
                                className="w-5 h-5 text-red-600 cursor-pointer"
                                onClick={onDelete}
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-col md:flex-row gap-4 pt-6">
                    <div className="flex-1">
                        {renderTextOrInput("startMargin", startMargin, "Start Margin")}
                    </div>
                    <div className="flex-1">
                        {renderTextOrInput("perValue", perValue, "Per Value (RULE-001)")}
                    </div>
                    <div className="flex-1">
                        {renderTextOrInput("maxHolding", maxHolding, "Max Holding (RULE-002)")}
                    </div>
                </div>

                {isEditing && (
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onSave}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};