import CreateCategoryInput from '../../src/catalog/application/dto/create_category_input'
import UpdateCategoryInput from '../../src/catalog/application/dto/update_category_input'
import CreateCategory from '../../src/catalog/application/usecase/create_category'
import UpdateCategory from '../../src/catalog/application/usecase/update_category'
import CategoryRepositoryMemory from '../../src/catalog/infra/repository/memory/category_repository_memory'

let createCategory: CreateCategory
let updateCategory: UpdateCategory

beforeEach(function () {
  const categoryRepositoryMemory = new CategoryRepositoryMemory()

  createCategory = new CreateCategory(categoryRepositoryMemory)
  updateCategory = new UpdateCategory(categoryRepositoryMemory)
})

test('should update a category', async function() { 
  const categoryInput = new CreateCategoryInput('category a', 'description a')
  const categoryOutput = await createCategory.execute(categoryInput)

  const input = new UpdateCategoryInput(categoryOutput.id, 'category updated', 'description updated')
  const output = await updateCategory.execute(input)

  expect(output.name).toBe('category updated')
})