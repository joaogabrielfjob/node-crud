import connection from '../src/database'
import { GetAllCategoriesService } from '../src/services/GetAllCategoriesService'

beforeAll(async () => {
  await connection.create()
})

afterAll(async () => {
  await connection.close()
})

test('should list all categories', async () => {
  const service = new GetAllCategoriesService()

  const result = await service.execute()

  expect(result.length).toBeGreaterThan(0)
})