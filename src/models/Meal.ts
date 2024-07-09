export interface Meal {
    createdAt: string;
    name: string;
    img: string;
    meal_type: {
        id: number;
        name: string;
    };
    description: string;
    date: string;
    id?: number;
}
