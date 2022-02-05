import TechStack from '@components/TechStackComponent'
import { mount } from '@vue/test-utils'

describe('TechStack component', () => {
  const wrapper = mount(TechStack)
  const message = 'Preferably tech-stack:'

  it ('TechStack component contain Preferably tech-stack message', () => {
    expect(wrapper.text()).toContain(message)
  })

  it ('TechStack component contain list of tech-stack', () => {
    expect(wrapper.text()).toContain('PHP')
    expect(wrapper.text()).toContain('Golang')
    expect(wrapper.text()).toContain('Nodejs')
    expect(wrapper.text()).toContain('Docker')
    expect(wrapper.text()).toContain('MySQL')
  })
})


