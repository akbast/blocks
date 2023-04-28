export interface Book {
    id: number;
    title: string;
}

export interface Person {
    id: number;
    name: string;
    age: number;
    books: Book[];
    street: string;
    city: string;
    state: string;
    zip: string;
    latitude: number;
    longitude: number;
    phone: string;
    email: string;
    website: string;
    company: string;
    jobTitle: string;
    favoriteColor: string;
}