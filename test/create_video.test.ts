import connection from '../src/database'
import { Category } from '../src/entities/Category'
import { Video } from '../src/entities/Video'
import { CreateCategoryService } from '../src/services/CreateCategoryService'
import { CreateVideoService } from '../src/services/CreateVideoService'
import { DeleteCategoryService } from '../src/services/DeleteCategoryService'
import { DeleteVideoService } from '../src/services/DeleteVideoService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should create video', async () => {
  const categoryService = new CreateCategoryService()

  const category = await categoryService.execute({ name: 'Categoria Temp', description: 'Descrição Temp' }) as Category

  const service = new CreateVideoService()

  const result = await service.execute({ name: 'Video Teste A', description: 'Video Teste A', duration: 5, category_id: category.id }) as Video

  expect(result.name).toBe('Video Teste A')

  const deleteService = new DeleteVideoService()

  await deleteService.execute(result.id)

  const deleteCategoryService = new DeleteCategoryService()

  await deleteCategoryService.execute(category.id)
})
