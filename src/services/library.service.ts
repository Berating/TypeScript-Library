import { PaginationInput } from '../schema/pagination.schema'
import { PaginationService } from './pagination.service'
import { LibraryInput, LibraryModel } from '../schema/library.schema'
import { Types } from 'mongoose'

export class LibraryService {
  async getLibrarys(paginatedInput: PaginationInput) {
    const userPaginationServices =
        new PaginationService(
          {
            model: LibraryModel,
            populate: 'user',
          })
    return userPaginationServices.getPaginatedItems(paginatedInput)
  }
  async getLibrary(_id: string) {
    return LibraryModel.findById(_id).populate('user').lean()
  }
  async createLibrary(library: LibraryInput, user: Types.ObjectId) {
    const libraryWithUser = { ...library, user }
    const createdLibrary = await LibraryModel.create(libraryWithUser)
    return createdLibrary.populate('user')
  }
  async deleteLibrary(_id: string) {
    return LibraryModel.findByIdAndRemove(_id).populate('user')
  }
  async updateLibrary(_id: string, library: LibraryInput) {
    return LibraryModel.findByIdAndUpdate(_id, library, { new: true }).populate('user')
  }
}