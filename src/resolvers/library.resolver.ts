import { Resolver, Query, Arg, Args, Mutation, Authorized, Ctx } from 'type-graphql'
import { PaginationInput } from '../schema/pagination.schema'
import { UserRole } from '../enums/user-role'
import { LibraryService } from '../services/library.service'
import { Library, LibraryInput, PaginatedLibraryResponse } from '../schema/library.schema'
import { Context } from '../types/context'

@Resolver()
export class LibraryResolver {

  constructor(private libraryService: LibraryService) {
    this.libraryService = new LibraryService()
  }

  @Query(() => PaginatedLibraryResponse)
  async librarys(@Args()paginatedInput: PaginationInput):Promise<PaginatedLibraryResponse> {
    return this.libraryService.getLibrarys(paginatedInput)
  }

  @Query(() => Library)
  async library(@Arg('_id') _id: string):Promise<Library> {
    return this.libraryService.getLibrary(_id)
  }

  @Mutation(() => Library)
  async createLibrary(@Ctx(){ user }: Context, @Arg('library') library: LibraryInput):Promise<Library> {
    return this.libraryService.createLibrary(library, user._id)
  }

  @Authorized([UserRole.SUPER_ADMIN, UserRole.ADMIN ])
  @Mutation(() => Library)
  async deleteLibrary(@Arg('_id') _id: string):Promise<Library> {
    return this.libraryService.deleteLibrary(_id)
  }
  @Mutation(() => Library)
  async updateLibrary(@Arg('_id') _id: string,
                   @Arg('library') library: LibraryInput):Promise<Library> {
    return this.libraryService.updateLibrary(_id, library)
  }

}
