export type cardProps = {
    title: string;
    image: string;
    subtitle?: string;
    description?: string;
    iconMeaning?: string;
    price?: number;
    rating?: string;
    className?: string;
};

export type cardTypeProps = {
    title: string;
    cards: cardProps[];
}