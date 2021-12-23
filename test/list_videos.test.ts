import connection from '../src/database'
import { Category } from '../src/entities/Category'
import { Video } from '../src/entities/Video'
import { CreateCategoryService } from '../src/services/CreateCategoryService'
import { CreateVideoService } from '../src/services/CreateVideoService'
import { DeleteCategoryService } from '../src/services/DeleteCategoryService'
import { DeleteVideoService } from '../src/services/DeleteVideoService'
import { GetAllCategoriesService } from '../src/services/GetAllCategoriesService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should list all videos', async () => {
  const categoryService = new CreateCategoryService()

  const category = await categoryService.execute({ name: 'Categoria Temp', description: 'Descrição Temp' }) as Category

  const createService = new CreateVideoService()

  const video = await createService.execute({ name: 'Video Teste A', description: 'Video Teste A', duration: 5, category_id: category.id }) as Video

  const service = new GetAllCategoriesService()

  const result = await service.execute()

  expect(result.length).toBeGreaterThan(0)

  const deleteService = new DeleteVideoService()

  await deleteService.execute(video.id)

  const deleteCategoryService = new DeleteCategoryService()

  await deleteCategoryService.execute(category.id)
})
