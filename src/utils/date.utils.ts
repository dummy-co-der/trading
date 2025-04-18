export const getMonthDifference = (start: string, end: string): number => {
    const [sMonth, sDay, sYear] = start.split("/").map(Number);
    const [eMonth, eDay, eYear] = end.split("/").map(Number);
    const startDate = new Date(sYear, sMonth - 1, sDay);
    const endDate = new Date(eYear, eMonth - 1, eDay);
    return (
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth())
    );
};
