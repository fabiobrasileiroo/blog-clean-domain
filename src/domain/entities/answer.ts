import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createAt: Date
  updatedAt?: Date
}
export class Answer extends Entity<AnswerProps> {
  constructor(props: AnswerProps, id?: string) {
    super(props, id)
  }
}