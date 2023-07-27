export interface Activity {
    id: string;
    title: string;
    currentStreak: number;
    longestStreak: number;
    history: any[];
    color: string;
}