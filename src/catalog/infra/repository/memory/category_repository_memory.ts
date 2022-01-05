import Category from '../../../domain/entity/category'
import category from '../../../domain/entity/category'
import CategoryRepository from '../../../domain/repository/category_repository'

export default class CategoryRepositoryMemory implements CategoryRepository {
  categories: Category[]

  constructor() {
    this.categories = []
  }

  async save(category: category): Promise<void> {
    this.categories.push(category)
  }

  async count(): Promise<number> {
    return this.categories.length
  }
}