import { Resolver, Query, Arg, Args, Mutation, Authorized, Ctx } from 'type-graphql'
import { ReaderService } from '../services/reader.service'
import { BaseReaderInput, CreateReaderInput, PaginatedReaderResponse, Reader, ReaderLoginArgs } from '../schema/reader.schema'
import { PaginationInput } from '../schema/pagination.schema'
import { UserRole } from '../enums/user-role'
import { Context } from '../types/context'

@Resolver()
export class ReaderResolver {

  constructor(private readerService: ReaderService) {
    this.readerService = new ReaderService()
  }

    @Query(() => PaginatedReaderResponse)
  async readers(@Args()paginatedInput: PaginationInput):Promise<PaginatedReaderResponse> {
    return this.readerService.getReaders(paginatedInput)
  }

  @Query(() => Reader)
    async reader(@Arg('_id') _id: string):Promise<Reader> {
      return this.readerService.getReader(_id)
    }

  @Mutation(() => String)
  async createReader(@Arg('reader') reader: CreateReaderInput):Promise<string> {
    return this.readerService.createReader(reader)
  }

  @Authorized([UserRole.SUPER_ADMIN, UserRole.ADMIN ])
  @Mutation(() => Reader)
  async deleteReader(@Arg('_id') _id: string):Promise<Reader> {
    return this.readerService.deleteReader(_id)
  }
  @Mutation(() => Reader)
  async updateReader(@Arg('_id') _id: string,
                   @Arg('reader') reader: BaseReaderInput):Promise<Reader> {
    return this.readerService.updateReader(_id, reader)
  }

  @Mutation(() => String)
  async login(@Args() { email, password }: ReaderLoginArgs):Promise<string> {
    return this.readerService.login(email, password)
  }

  @Query(() => Reader)
  async currentReader(@Ctx(){ reader }: Context): Promise<Reader> {
    return this.readerService.currentReader(reader)
  }
}
