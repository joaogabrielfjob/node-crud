export default class Video {

  constructor(
    readonly id: number, 
    readonly name: string, 
    readonly description: string, 
    readonly duration: number, 
    readonly categoryId: number
  ) { }
}