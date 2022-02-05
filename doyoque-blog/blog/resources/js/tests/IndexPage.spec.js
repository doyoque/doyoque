import Index from '@pages/Index'
import { mount } from '@vue/test-utils'

describe('Index', () => {
  const wrapper = mount(Index)
  it ('Index component contain hello world string', () => {
    expect(wrapper.text()).toContain('hello world')
  })
})
