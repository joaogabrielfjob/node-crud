import connection from '../src/database'
import { UpdateVideoService } from '../src/services/UpdateVideoService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should update category', async () => {
  const service = new UpdateVideoService()

  const result = await service.execute({ id: 'c5ac901a-3d10-4eaa-9685-465e5d76da03', name: 'Video Teste', description: 'Descrição Teste', duration: 1, category_id: 'b45d6d8d-33ff-4e0b-8fec-b8d68638ba49' })

  expect(result.name).toBe('Video Teste')
})
