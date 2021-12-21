import connection from '../src/database'
import { UpdateCategoryService } from '../src/services/UpdateCategoryService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should update category', async () => {
  const service = new UpdateCategoryService()

  const result = await service.execute({ id: 'b45d6d8d-33ff-4e0b-8fec-b8d68638ba49', name: 'Categoria Teste', description: 'Descrição Teste'})

  expect(result.name).toBe('Categoria Teste')
})