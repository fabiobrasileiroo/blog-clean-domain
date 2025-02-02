import { Entity } from "@/core/entitites/entity"
interface AnswerProps {
  content: string
  authorId: string
  questionId: string
}
export class Answer extends Entity {
  constructor(props: AnswerProps, id?: string) {
    super(props, id)
  }
}