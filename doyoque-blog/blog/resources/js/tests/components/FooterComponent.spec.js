import Footer from '@components/FooterComponent'
import { mount } from '@vue/test-utils'

describe('Footer component', () => {
  const wrapper = mount(Footer)
  const message = 'Copyright @ 2022 Doyoque'

  it ('Footer component contain copyright message', () => {
    expect(wrapper.text()).toContain(message)
  })
})

