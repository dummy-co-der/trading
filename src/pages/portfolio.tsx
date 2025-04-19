import React, { useState } from "react";
import { PortfolioCard, Footer } from "#components";
import { PortfolioGroup } from "#interfaces";
import { portfolioGroups } from "#constants";

export const Portfolio = () => {
    const [groups, setGroups] = useState<PortfolioGroup[]>(portfolioGroups);
    const [editingGroupId, setEditingGroupId] = useState<string | null>(null);
    const [editedGroup, setEditedGroup] = useState<Partial<PortfolioGroup>>({});
    const [wasNewGroupSaved, setWasNewGroupSaved] = useState(false);

    const fieldMap: Record<string, keyof PortfolioGroup> = {
        title: "name",
        groupName: "name",
        startMargin: "startMargin",
        perValue: "perValue",
        maxHolding: "maxHolding",
    };

    const handleAddGroup = () => {
        const newGroup: PortfolioGroup = {
            id: `group-${Date.now()}`,
            name: "",
            startMargin: 0,
            perValue: 0,
            maxHolding: 0,
            isNew: true,
        };
        setGroups(prev => [...prev, newGroup]);
        setEditingGroupId(newGroup.id);
        setEditedGroup(newGroup);
        setWasNewGroupSaved(false);
    };

    const handleDeleteGroup = (id: string) => {
        setGroups(prev => prev.filter(group => group.id !== id));
        if (editingGroupId === id) {
            setEditingGroupId(null);
            setEditedGroup({});
            setWasNewGroupSaved(false);
        }
    };

    const handleEditGroup = (group: PortfolioGroup) => {
        setEditingGroupId(group.id);
        setEditedGroup(group);
    };

    const handleCancelEdit = () => {
        if (editedGroup?.id && editedGroup.isNew && !wasNewGroupSaved) {
            setGroups(prev => prev.filter(group => group.id !== editedGroup.id));
        }
        setEditingGroupId(null);
        setEditedGroup({});
        setWasNewGroupSaved(false);
    };

    const handleSaveGroup = () => {
        if (!editingGroupId) return;

        setGroups(prev =>
            prev.map(group =>
                group.id === editingGroupId
                    ? { ...(editedGroup as PortfolioGroup), isNew: false }
                    : group
            )
        );
        setEditingGroupId(null);
        setEditedGroup({});
        setWasNewGroupSaved(true);
    };

    const handleChange = (field: keyof PortfolioGroup, value: string) => {
        const numericFields: (keyof PortfolioGroup)[] = ["startMargin", "perValue", "maxHolding"];
        setEditedGroup(prev => ({
            ...prev,
            [field]: numericFields.includes(field) ? Number(value) : value,
        }));
    };

    return (
        <div className="h-full flex flex-col gap-24 bg-gray-50">
            <div className="flex-1">
                <div className="flex flex-col max-w-4xl mx-auto pt-8">
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
                        {groups.map(group => {
                            const isEditing = editingGroupId === group.id;
                            const currentEditedData = isEditing
                                ? {
                                    groupName: editedGroup.name ?? "",
                                    startMargin: editedGroup.startMargin ?? 0,
                                    perValue: editedGroup.perValue ?? 0,
                                    maxHolding: editedGroup.maxHolding ?? 0,
                                }
                                : undefined;

                            return (
                                <PortfolioCard
                                    key={group.id}
                                    groupName={group.name}
                                    startMargin={group.startMargin ?? 0}
                                    perValue={group.perValue ?? 0}
                                    maxHolding={group.maxHolding ?? 0}
                                    isEditing={isEditing}
                                    onEdit={() => handleEditGroup(group)}
                                    onDelete={() => handleDeleteGroup(group.id)}
                                    onCancel={handleCancelEdit}
                                    onSave={handleSaveGroup}
                                    editedData={currentEditedData}
                                    onChange={(field, value) =>
                                        handleChange(fieldMap[field], value)
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
