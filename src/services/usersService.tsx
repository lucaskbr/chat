import { faker } from '@faker-js/faker';
import { User } from '../types/user';

export class UsersService {
    static async getUsers(): Promise<User[]> {

        return [...Array(10).keys()].map(() => {

            const fakeId = faker.number.int();
            const fakeName = faker.person.fullName();
            const fakeIsOnline = faker.datatype.boolean();

            return {
                id: fakeId,
                avatarUrl: `https://robohash.org/${fakeId}?set=set4`,
                isOnline: fakeIsOnline,
                name: fakeName
            };
        });
    }
}