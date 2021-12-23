import connection from '../src/database'
import { DeleteVideoService } from '../src/services/DeleteVideoService'
import { CreateVideoService } from '../src/services/CreateVideoService'
import { Video } from '../src/entities/Video'
import { CreateCategoryService } from '../src/services/CreateCategoryService'
import { Category } from '../src/entities/Category'
import { DeleteCategoryService } from '../src/services/DeleteCategoryService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should delete video', async () => {
  const categoryService = new CreateCategoryService()

  const category = await categoryService.execute({ name: 'Categoria Temp', description: 'Descrição Temp' }) as Category

  const videoService = new CreateVideoService()

  const video = await videoService.execute({ name: 'Video Temp', description: 'Descrição Temp', duration: 5, category_id: category.id }) as Video

  const service = new DeleteVideoService()

  const result = await service.execute(video.id)

  expect(result).toBeUndefined()

  const deleteService = new DeleteCategoryService()

  await deleteService.execute(category.id)
})
