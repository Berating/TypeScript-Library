import { Field, InputType, ObjectType } from 'type-graphql'
import { BaseModel } from './model.schema'
import { getModelForClass, prop as Prop, Ref } from '@typegoose/typegoose'
import PaginatedResponse from './pagination.schema'
import { IsDate, MinLength } from 'class-validator'
import { Reader } from './reader.schema'
import { Types } from 'mongoose'
import { ObjectIdScalar } from '../object-id.scalar'

@ObjectType()
export class Library extends BaseModel {

    @Field()
    @Prop({ required: true })
      place: string

    @Field()
    @Prop({ required: true })
      description: string

    @Field(() => Date)
    @Prop({ required: true })
      libraryDate: Date

    @Field(() => Reader)
    @Prop({ ref: Reader, required: true })
      reader: Ref<Reader, Types.ObjectId>
}

export const LibraryModel = getModelForClass(Library,
  { schemaOptions: { timestamps: true },
  })

@InputType()
export class LibraryInput {
    @Field()
    @MinLength(3)
      place: string
    @MinLength(3)
    @Field()
      description: string
    @IsDate()
    @Field(() => Date)
      libraryDate: Date
}

@ObjectType()
export class PaginatedLibraryResponse extends PaginatedResponse(Library){}
