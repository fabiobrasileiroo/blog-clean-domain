import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Slug } from "./value-objects/slug"
import { Entity } from "@/core/entities/entity"
import { Optional } from "@/core/@types/optional"
import dayjs from "dayjs"

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
  get authorId() {
    return this.props.authorId
  }

  get bestAnswerId() {
    return this.props.bestAnswerId
  }

  get title() {
    return this.props.title
  }

  get content() {
    return this.props.content
  }
  get slug() {
    return this.props.slug
  }

  get createdAt() {
    return this.props.createAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt,'days') <= 3
  }

  static create(
    props: Optional<QuestionProps, 'createAt'>,
    id?: UniqueEntityID
  ) {
    const question = new Question({
      ...props,
      createAt: new Date(),
    }, id)

    return question
  }

}

