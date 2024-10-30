export interface Movie  {
        revenue(revenue: any): import("react").ReactNode;
        budget(budget: any): import("react").ReactNode;
        id: number;
        title: string;
        poster_path: string;
        vote_average: number;
        tagline: number;
        runtime: number;
        overview: number;
        revenuebudget: number;
}