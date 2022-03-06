import RandomQuote from '@components/index/RandomQuoteComponent'
import { mount } from '@vue/test-utils'

describe('Random Quote component', () => {
  const wrapper = mount(RandomQuote)
  const message = 'Today\'s quote:'

  it ('Contain today quote text', () => {
    expect(wrapper.text()).toContain(message)
  })
})

