import connection from '../src/database'
import { Category } from '../src/entities/Category'
import { CreateCategoryService } from '../src/services/CreateCategoryService'
import { DeleteCategoryService } from '../src/services/DeleteCategoryService'
import { UpdateCategoryService } from '../src/services/UpdateCategoryService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should update category', async () => {
  const createService = new CreateCategoryService()

  const category = await createService.execute({ name: 'Categoria Teste B', description: 'Descrição Teste B' }) as Category

  const service = new UpdateCategoryService()

  const result = await service.execute({ id: category.id, name: 'Categoria Teste', description: 'Descrição Teste'})

  expect(result.name).toBe('Categoria Teste')

  const deleteService = new DeleteCategoryService()

  await deleteService.execute(category.id)
})