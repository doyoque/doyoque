import { mount } from '@vue/test-utils'
import Posts from '@pages/Posts'

describe('Post', () => {
  //
  const wrapper = mount(Posts)

  it ('Should return name of component Posts', () => {
    expect(wrapper.vm.$options.name).toBe('Posts')
  })
})
