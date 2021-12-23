import connection from '../src/database'
import { Video } from '../src/entities/Video'
import { CreateVideoService } from '../src/services/CreateVideoService'
import { DeleteVideoService } from '../src/services/DeleteVideoService'
import { UpdateVideoService } from '../src/services/UpdateVideoService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should update category', async () => {
  const createService = new CreateVideoService()

  const video = await createService.execute({ name: 'Video Teste A', description: 'Video Teste A', duration: 5, category_id: 'b45d6d8d-33ff-4e0b-8fec-b8d68638ba49' }) as Video

  const service = new UpdateVideoService()

  const result = await service.execute({ id: video.id, name: 'Video Teste', description: 'Descrição Teste', duration: 1, category_id: 'b45d6d8d-33ff-4e0b-8fec-b8d68638ba49' })

  expect(result.name).toBe('Video Teste')

  const deleteService = new DeleteVideoService()

  await deleteService.execute(video.id)
})
