export default class UpdateCategoryInput {

  constructor(
    readonly id: number, 
    readonly name: string, 
    readonly description: string
  ) { }
}