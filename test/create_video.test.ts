import connection from '../src/database'
import { Video } from '../src/entities/Video'
import { CreateVideoService } from '../src/services/CreateVideoService'
import { DeleteVideoService } from '../src/services/DeleteVideoService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should create video', async () => {
  const service = new CreateVideoService()

  const result = await service.execute({ name: 'Video Teste A', description: 'Video Teste A', duration: 5, category_id: 'b45d6d8d-33ff-4e0b-8fec-b8d68638ba49' }) as Video

  expect(result.name).toBe('Video Teste A')

  const deleteService = new DeleteVideoService()

  await deleteService.execute(result.id)
})
