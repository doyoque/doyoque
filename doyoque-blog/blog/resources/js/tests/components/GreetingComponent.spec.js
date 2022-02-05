import Greeting from '@components/GreetingComponent'
import { mount } from '@vue/test-utils'

describe('Greeting component', () => {
  const wrapper = mount(Greeting)
  const message = 'Welcome to doyoque-blog!'

  it ('Greeting component contain welcome message', () => {
    expect(wrapper.text()).toContain(message)
  })
})

