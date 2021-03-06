import Index from '@pages/Index'
import { mount } from '@vue/test-utils'

describe('Index', () => {
  const wrapper = mount(Index)
  const message = 'Welcome to doyoque-blog!'

  it ('Index page contain welcome greeting', () => {
    expect(wrapper.text()).toContain(message)
  })

  it ('Should return name of componet Index', () => {
    expect(wrapper.vm.$options.name).toBe('Index')
  })
})
