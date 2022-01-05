import CreateCategoryInput from '../../src/catalog/application/dto/create_category_input'
import CreateCategory from '../../src/catalog/application/usecase/create_category'
import CategoryRepositoryMemory from '../../src/catalog/infra/repository/memory/category_repository_memory'

let createCategory: CreateCategory

beforeEach(function () {
  const categoryRepositoryMemory = new CategoryRepositoryMemory()
  createCategory = new CreateCategory(categoryRepositoryMemory)
})

test('should insert a category', async function() {
  const input = new CreateCategoryInput('category a', 'description a')

  const output = await createCategory.execute(input)

  expect(output.id).toBe(1)
})