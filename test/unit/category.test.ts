import Category from '../../src/domain/entity/category'

test('should create a category', function() {
  const category = new Category(1, 'real category', 'real description', new Date())

  expect(category.id).toBe(1)
})