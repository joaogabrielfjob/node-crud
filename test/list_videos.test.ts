import connection from '../src/database'
import { Video } from '../src/entities/Video'
import { CreateVideoService } from '../src/services/CreateVideoService'
import { DeleteVideoService } from '../src/services/DeleteVideoService'
import { GetAllCategoriesService } from '../src/services/GetAllCategoriesService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should list all videos', async () => {
  const createService = new CreateVideoService()

  const video = await createService.execute({ name: 'Video Teste A', description: 'Video Teste A', duration: 5, category_id: 'b45d6d8d-33ff-4e0b-8fec-b8d68638ba49' }) as Video

  const service = new GetAllCategoriesService()

  const result = await service.execute()

  expect(result.length).toBeGreaterThan(0)

  const deleteService = new DeleteVideoService()

  await deleteService.execute(video.id)
})
