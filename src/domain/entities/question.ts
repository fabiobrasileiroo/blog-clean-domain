import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Slug } from "./value-objects/slug"
import { Entity } from "@/core/entities/entity"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {

  constructor(props: QuestionProps, id?: string) {
    super(props, id)
  }

}

