import connection from '../src/database'
import { Category } from '../src/entities/Category'
import { CreateCategoryService } from '../src/services/CreateCategoryService'
import { DeleteCategoryService } from '../src/services/DeleteCategoryService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should create category', async () => {
  const service = new CreateCategoryService()

  const result = await service.execute({ name: 'Categoria Teste B', description: 'Descrição Teste B' }) as Category

  expect(result.name).toBe('Categoria Teste B')

  const deleteService = new DeleteCategoryService()

  await deleteService.execute(result.id)
})