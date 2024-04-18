import { Request } from 'express'
import { Reader } from '../schema/reader.schema'
export interface Context {
    req: Request,
    reader: Reader,
    ip: any,
    // location: any,
    md: any,
}
