import clockComponent from '@components/ClockComponent'
import { mount } from '@vue/test-utils'

describe('Clock component', () => {
  jest.useFakeTimers()
  const wrapper = mount(clockComponent)
  const message = 'Time:'

  it ('Contain today quote text', () => {
    expect(wrapper.text()).toContain(message)
  })

  it ('Data hours must begin with 0', () => {
    expect(wrapper.vm.hours).toEqual(0)
  })

  it ('Data minutes must begin with 0', () => {
    expect(wrapper.vm.minutes).toEqual(0)
  })

  it ('Data seconds must begin with 0', () => {
    expect(wrapper.vm.seconds).toEqual(0)
  })

  it ('Data hours must have value after 1 second', () => {
    wrapper.vm.clockTime()
    jest.advanceTimersByTime(1000)

    const date = new Date()
    const hours = wrapper.vm.checkDigit(date.getHours())

    expect(wrapper.vm.hours).toEqual(hours)
  })

  it ('checkDigit return string with 0 at beginning', () => {
    let data = 9
    expect(wrapper.vm.checkDigit(data)).toEqual('09')
  })

  it ('checkDigit return string without 0 at beginning', () => {
    let data = 12
    expect(wrapper.vm.checkDigit(data)).toEqual('12')
  })
})

