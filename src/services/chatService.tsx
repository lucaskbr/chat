import { faker } from '@faker-js/faker';
import { User } from '../types/user';
import { Chat } from '../types/chat';
import { CURRENT_USER_ID } from '../utils/constans';

export class ChatService {
    static async getChatFrom(user: User): Promise<Chat> {
        const chat = {
            id: faker.number.int(),
            messages: [],
            participants: [
                {
                    id: CURRENT_USER_ID,
                    name: faker.person.fullName(),
                    avatarUrl: `https://robohash.org/${1}?set=set4`,

                },
                {
                    id: user.id,
                    name: user.name,
                    avatarUrl: `https://robohash.org/${user.id}?set=set4`,
                },
            ],
        };

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(chat);
            }, 2000);
        });

    }
}