export default class Category {

  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly createdAt: Date = new Date()
  ) { }
}