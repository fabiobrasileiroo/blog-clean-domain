import { Entity } from "@/core/entitites/entity"

interface InstructorProps {
  name: string
}

export class Instructor extends Entity{

  constructor(props: InstructorProps, id?: string) {
    super(props,id)
  }

}