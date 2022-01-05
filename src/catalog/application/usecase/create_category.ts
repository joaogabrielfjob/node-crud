import Category from '../../domain/entity/category'
import CategoryRepository from '../../domain/repository/category_repository'
import CreateCategoryInput from '../dto/create_category_input'
import CreateCategoryOutput from '../dto/create_category_output'

export default class CreateCategory {

  constructor(readonly categoryRepository: CategoryRepository) { }

  async execute(input: CreateCategoryInput): Promise<CreateCategoryOutput> {
    let id = await this.categoryRepository.count()

    const category = new Category(++id, input.name, input.description)

    await this.categoryRepository.save(category)

    return new CreateCategoryOutput(category.id)
  }
}