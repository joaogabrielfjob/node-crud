import connection from '../src/database'
import { DeleteVideoService } from '../src/services/DeleteVideoService'
import { CreateVideoService } from '../src/services/CreateVideoService'
import { Category } from '../src/entities/Category'
import { Video } from '../src/entities/Video'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should delete video', async () => {
  const service = new DeleteVideoService()
  const videoService = new CreateVideoService();

  const video = await videoService.execute({ name: 'Video Temp', description: 'Descrição Temp', duration: 5, category_id: 'b45d6d8d-33ff-4e0b-8fec-b8d68638ba49' }) as Video

  const result = await service.execute(video.id)

  expect(result).toBeUndefined()
})
