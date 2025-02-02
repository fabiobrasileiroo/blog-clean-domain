import { Entity } from "@/core/entitites/entity"

interface StudentProps {
  name:string
}
export class student extends Entity{

  constructor(props: StudentProps, id: string) {
    super(props,id)
  }
}