import { User } from '../schema/reader.schema'

declare module 'express' {

    export interface Request {
        user: User
    }
}
