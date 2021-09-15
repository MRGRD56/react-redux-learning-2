import axios from "axios";
import User from "../models/jsonplaceholder/User";
import Person from "../models/Person";

export default abstract class JsonPlaceholder {
    static async getPersons() {
        const users = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        const persons: Person[] = users.data.map(user => {
            return {
                name: user.name,
                age: Math.round(Math.random() * 100),
                skills: user.company.name.split(" ")
            }
        });

        return persons;
    }
}