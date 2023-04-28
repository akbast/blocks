import axios from "axios";
import { Person } from "./models";

export class PersonApi {
    public async getPersons(): Promise<Person[]> {
        const response = await axios.get<Person[]>('/api/persons');
        return response.data;
    }

    public async addPerson(person: Person): Promise<Person> {
        const response = await axios.post<Person>('/api/persons', person);
        return response.data;
    }

    public async deletePerson(id: number): Promise<void> {
        await axios.delete(`/api/persons/${id}`);
    }

    public async updatePerson(person: Person): Promise<Person> {
        const response = await axios.put<Person>(`/api/persons/${person.id}`, person);
        return response.data;
    }
}