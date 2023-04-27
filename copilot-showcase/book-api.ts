// create an api class. This class will be used by the client to make requests to the server. 
// The class should contain a method for each endpoint in the server.
// The methods should return a promise that resolves to the response from the server.
// The methods should take the same parameters as the server endpoints.
// The methods should use axios to make the requests to the server.
// The methods should use the same url as the server endpoints.

import axios from 'axios';
import { Book } from './models';

export class BookApi {
    public async getBooks(): Promise<Book[]> {
        const response = await axios.get<Book[]>('/api/books');
        return response.data;
    }

    public async addBook(book: Book): Promise<Book> {
        const response = await axios.post<Book>('/api/books', book);
        return response.data;
    }

    public async deleteBook(id: number): Promise<void> {
        await axios.delete(`/api/books/${id}`);
    }

    public async updateBook(book: Book): Promise<Book> {
        const response = await axios.put<Book>(`/api/books/${book.id}`, book);
        return response.data;
    }
}