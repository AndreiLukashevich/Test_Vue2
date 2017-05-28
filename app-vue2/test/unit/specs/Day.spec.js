import Vue from 'vue'
import Day from '@/components/Day'

describe('Day.vue', () => {
  it('Test Data', () => {
    expect(typeof Day.data === 'function')
    const testData = Day.data()
    expect(typeof testData.editSave === 'boolean')
    expect(typeof testData.day === 'object')
    expect(typeof testData.days === 'object')
  })
})

// describe('Day.vue', () => {
//   it('Test Created', () => {
//     expect(typeof Day.created === 'function')
//     console.log('testCreated')
//     const Ctor = Vue.extend(Day)
//     const vm = new Ctor().$mount()
//     Day.created()
//     console.log(typeof id)
//   })
// })

describe('Day.vue', () => {
  it('Test goBack', () => {
    const Ctor = Vue.extend(Day)
    const vm = new Ctor().$mount()
    expect(typeof vm.goBack === 'function')
  })
})

describe('Day.vue', () => {
  it('Test editTask', () => {
    const Ctor = Vue.extend(Day)
    const vm = new Ctor().$mount()
    expect(typeof vm.editTask === 'function')
  })
})

describe('Day.vue', () => {
  it('Test saveTask', () => {
    const Ctor = Vue.extend(Day)
    const vm = new Ctor().$mount()
    expect(typeof vm.saveTask === 'function')
  })
})

describe('Day.vue', () => {
  it('Test getInput', () => {
    const Constructor = Vue.extend(Day)
    const vm = new Constructor().$mount()
    expect(typeof vm.getInput === 'function')
    expect(typeof vm.getInput() === 'object')
  })
})
