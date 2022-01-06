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

  async update(category: Category): Promise<void> {
    const index = this.categories.findIndex(c => c.id === category.id)
    let temp = [...this.categories]

    temp[index] = { ...temp[index], ...category }

    this.categories = temp
  }

  async count(): Promise<number> {
    return this.categories.length
  }

  async countById(categoryId: number): Promise<number> {
    return this.categories.filter(c => c.id === categoryId).length
  }
}