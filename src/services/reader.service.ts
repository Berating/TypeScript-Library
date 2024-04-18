import { BaseReaderInput, CreateReaderInput, Reader, ReaderModel } from '../schema/reader.schema'
import { PaginationInput } from '../schema/pagination.schema'
import { PaginationService } from './pagination.service'
import { AppError } from '../utils/error'
import { ErrorCodes } from '../constants/error-codes'
import { generateToken } from '../utils/token'
import bcryptjs from 'bcryptjs'

export class ReaderService {
  async getReaders(paginatedInput: PaginationInput) {
    const readerPaginationServices =
        new PaginationService({ model:  ReaderModel })
    return readerPaginationServices.getPaginatedItems(paginatedInput)
  }
  async getReader(_id: string) {
    return ReaderModel.findById(_id).lean()
  }
  async createReader(reader: CreateReaderInput) {
    const password = bcryptjs.hashSync(reader.password, 10)
    const readerData = { ...reader, password }
    const createdReader = await ReaderModel.create(readerData)
    return generateToken(createdReader._id, createdReader.roles)
  }
  async deleteReader(_id: string) {
    return ReaderModel.findByIdAndRemove(_id)
  }
  async updateReader(_id: string, reader: BaseReaderInput) {
    return ReaderModel.findByIdAndUpdate(_id, reader, { new: true })
  }

  async login(email: string, password: string) {
    const reader = await ReaderModel.findOne({ email }).lean()
    if(!reader) {
      throw AppError('Reader not found', ErrorCodes.BAD_USER_INPUT)
    }
    const isMatching = await bcryptjs.compare(password, reader.password)
    if(!isMatching) {
      throw AppError('Reader not found', ErrorCodes.BAD_USER_INPUT)
    }
    return generateToken(reader._id, reader.roles)
  }

  async currentReader(reader: Reader) {
    if(!reader?._id) {
      throw AppError('Unauthenticated', ErrorCodes.UNAUTHENTICATED)
    }
    return ReaderModel.findById(reader._id).lean()
  }
}