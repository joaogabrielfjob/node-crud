import connection from '../src/database'
import { DeleteCategoryService } from '../src/services/DeleteCategoryService'
import { CreateCategoryService } from '../src/services/CreateCategoryService'
import { Category } from '../src/entities/Category'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should delete category', async () => {
  const service = new DeleteCategoryService()
  const categoryService = new CreateCategoryService();

  const category = await categoryService.execute({ name: 'Categoria Temp', description: 'Descrição Temp' }) as Category

  const result = await service.execute(category.id)

  expect(result).toBeUndefined()
})
