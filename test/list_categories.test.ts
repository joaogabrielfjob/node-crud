import connection from '../src/database'
import { Category } from '../src/entities/Category'
import { CreateCategoryService } from '../src/services/CreateCategoryService'
import { DeleteCategoryService } from '../src/services/DeleteCategoryService'
import { GetAllCategoriesService } from '../src/services/GetAllCategoriesService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should list all categories', async () => {
  const createService = new CreateCategoryService()

  const category = await createService.execute({ name: 'Categoria Teste B', description: 'Descrição Teste B' }) as Category

  const service = new GetAllCategoriesService()

  const result = await service.execute()

  expect(result.length).toBeGreaterThan(0)

  const deleteService = new DeleteCategoryService()

  await deleteService.execute(category.id)
})