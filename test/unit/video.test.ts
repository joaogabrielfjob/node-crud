import Video from '../../src/domain/entity/video'

test('should create a video', function() {
  const video = new Video(1, 'real name', 'real description', 120, 1)

  expect(video.id).toBe(1)
})