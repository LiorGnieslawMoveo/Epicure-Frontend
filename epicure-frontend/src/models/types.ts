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
    cardsList: cardProps[];
}

export type Chef = {
    name: string;
    image: string;
    description: string;
    restaurants: cardProps[];
}