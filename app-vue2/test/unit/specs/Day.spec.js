import Vue from 'vue'
import Day from '@/components/Day'

describe('Day.vue', () => {
  it('should return type Object', () => {
    const Constructor = Vue.extend(Day)
    const vm = new Constructor().$mount()
    expect(typeof vm.getInput() === 'object')
  })
})
