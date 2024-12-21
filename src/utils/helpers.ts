export const formatPlayerName = (name: string): string => {
    return name.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};

export const validateVideoFile = (file: File): boolean => {
    const validTypes = ['video/mp4', 'video/avi', 'video/mov'];
    return validTypes.includes(file.type);
};

export const calculatePlayerScore = (performanceMetrics: number[]): number => {
    const totalScore = performanceMetrics.reduce((acc, metric) => acc + metric, 0);
    return totalScore / performanceMetrics.length;
};

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};