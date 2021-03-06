import Category from '../entity/category'

export default interface CategoryRepository {

  save(category: Category): Promise<void>

  update(category: Category): Promise<void>
  
  count(): Promise<number>

  countById(categoryId: number): Promise<number>
}