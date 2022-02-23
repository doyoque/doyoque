import clockComponent from '@components/ClockComponent'
import { mount } from '@vue/test-utils'

describe('Clock component', () => {
  const wrapper = mount(clockComponent)
  const message = 'Time:'

  it ('Contain today quote text', () => {
    expect(wrapper.text()).toContain(message)
  })
})


