import { User} from './user';

export type AuthParams = {
    email: string;
    password: string;
}

export type AuthReturn = {
    user: User;
    token: string;
}