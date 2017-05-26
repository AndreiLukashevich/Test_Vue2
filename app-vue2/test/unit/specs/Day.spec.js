import Vue from 'vue'
import Day from '@/components/Day'

describe('Day.vue', () => {
  it('should return type Object', () => {
    const Constructor = Vue.extend(Day)
    const vm = new Constructor().$mount()
    expect(typeof vm.getInput() === 'object')
  })
})

describe('Day.vue', () => {
  it('Test1', () => {
    expect(typeof Day.data === 'function')
    const testData = Day.data()
    expect(typeof testData.editSave === 'boolean')
    expect(typeof testData.day === 'object')
    expect(typeof testData.days === 'object')
  })
})

describe('Day.vue', () => {
  it('Test2', () => {
    expect(typeof Day.created === 'function')
    console.log('testCreated')
    const Ctor = Vue.extend(Day)
    const vm = new Ctor().$mount()
    console.log(typeof vm.created)
  })
})
