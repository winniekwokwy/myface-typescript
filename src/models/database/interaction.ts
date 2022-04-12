export type InteractionType = "LIKE" | "DISLIKE";

export interface Interaction {
    id: number;
    interactionType: InteractionType;
    date: Date;
    userId: number;
    postId: number;
}