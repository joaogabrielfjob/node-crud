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

  const result = await service.execute({ id: 'c1aa91e2-34ac-4f0e-b445-a29908b32d4e', name: 'Categoria Teste', description: 'Descrição Teste'})

  expect(result.name).toBe('Categoria Teste')
})