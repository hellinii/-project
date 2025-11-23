export const getTLIColorClass = (score: number) => {
    if (score <= 0.25) return 'text-green-500';
    if (score <= 0.50) return 'text-orange-500'; // or yellow
    return 'text-red-500';
};

export const formatTime12Hour = (time: string): string => {
    if (!time) return '';

    // Handle "HH:MM:SS" or "HH:MM"
    const [hoursStr, minutesStr] = time.split(':');
    let hours = parseInt(hoursStr, 10);
    const minutes = minutesStr;

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    return `${hours}:${minutes} ${ampm}`;
};
