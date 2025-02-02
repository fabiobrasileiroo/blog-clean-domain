import { Entity } from "@/core/entities/entity"

interface StudentProps {
  name: string
}
export class student extends Entity<StudentProps> {

  get content() {
    return this.props
  }

  constructor(props: StudentProps, id: string) {
    super(props, id)
  }
}