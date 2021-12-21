import connection from '../src/database'
import { CreateCategoryService } from '../src/services/CreateCategoryService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should create category', async () => {
  const service = new CreateCategoryService()

  const result = await service.execute({ name: 'Categoria Teste A', description: 'Descrição Teste A'})

  expect(result.name).toBe('Categoria Teste A')
})
