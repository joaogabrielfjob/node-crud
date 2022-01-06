import Category from '../../domain/entity/category'
import CategoryRepository from '../../domain/repository/category_repository'
import UpdateCategoryInput from '../dto/update_category_input'
import UpdateCategoryOutput from '../dto/update_category_output'

export default class UpdateCategory {

  constructor(readonly categoryRepository: CategoryRepository) { }

  async execute(input: UpdateCategoryInput): Promise<UpdateCategoryOutput> {
    const count = await this.categoryRepository.countById(input.id)

    if (!count && count < 1) throw new Error('Category does not exist')

    const category = new Category(input.id, input.name, input.description)

    await this.categoryRepository.update(category)

    return new UpdateCategoryOutput(category.name, category.description)
  }
}