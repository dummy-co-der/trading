import React, { useState } from "react";
import { PortfolioCard } from "#components";
import { PortfolioGroup } from "#interfaces";
import { portfolioGroups } from "#constants";

export const Portfolio = () => {
    const [groups, setGroups] = useState<PortfolioGroup[]>(portfolioGroups);
    const [editingGroupId, setEditingGroupId] = useState<string | null>(null);
    const [editedGroup, setEditedGroup] = useState<Partial<PortfolioGroup>>({});

    const handleAddGroup = () => {
        const newGroup: PortfolioGroup = {
            id: `group-${Date.now()}`,
            name: "New Group",
            startMargin: 5000,
            perValue: 1000,
            maxHolding: 5,
        };
        setGroups([...groups, newGroup]);
        setEditingGroupId(newGroup.id);
        setEditedGroup(newGroup);
    };

    const handleDeleteGroup = (id: string) => {
        setGroups(groups.filter(group => group.id !== id));
        if (editingGroupId === id) {
            setEditingGroupId(null);
            setEditedGroup({});
        }
    };

    const handleEditGroup = (group: PortfolioGroup) => {
        setEditingGroupId(group.id);
        setEditedGroup(group);
    };

    const handleCancelEdit = () => {
        setEditingGroupId(null);
        setEditedGroup({});
    };

    const handleSaveGroup = () => {
        if (!editingGroupId) return;

        const updated = groups.map(group =>
            group.id === editingGroupId ? (editedGroup as PortfolioGroup) : group
        );

        setGroups(updated);
        setEditingGroupId(null);
        setEditedGroup({});
    };

    const handleChange = (field: keyof PortfolioGroup, value: string) => {
        const numericFields: (keyof PortfolioGroup)[] = ["startMargin", "perValue", "maxHolding"];
        setEditedGroup(prev => ({
            ...prev,
            [field]: numericFields.includes(field) ? Number(value) : value,
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col max-w-4xl mx-auto pt-20">
                <div className="flex items-center justify-between py-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Portfolio Management
                    </h1>
                    <button
                        onClick={handleAddGroup}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    >
                        Add Group
                    </button>
                </div>

                <div className="grid gap-6">
                    {groups.map(group => (
                        <PortfolioCard
                            key={group.id}
                            groupName={group.name}
                            startMargin={group.startMargin}
                            perValue={group.perValue}
                            maxHolding={group.maxHolding}
                            isEditing={editingGroupId === group.id}
                            onEdit={() => handleEditGroup(group)}
                            onDelete={() => handleDeleteGroup(group.id)}
                            onCancel={handleCancelEdit}
                            onSave={handleSaveGroup}
                            editedData={
                                editingGroupId === group.id
                                    ? {
                                        groupName: editedGroup.name ?? "",
                                        startMargin: editedGroup.startMargin ?? 0,
                                        perValue: editedGroup.perValue ?? 0,
                                        maxHolding: editedGroup.maxHolding ?? 0,
                                    }
                                    : undefined
                            }
                            onChange={(field, value) => {
                                const fieldMap: Record<string, keyof PortfolioGroup> = {
                                    title: "name",
                                    startMargin: "startMargin",
                                    perValue: "perValue",
                                    maxHolding: "maxHolding",
                                };
                                const actualField = fieldMap[field];
                                handleChange(actualField, value);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
