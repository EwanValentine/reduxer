import { create } from './reducers'

import assert from 'assert'

describe('Reducers', () => {
  describe('create', () => {
    
    it('Should return a function for a given object', () => {

      const reducer = create({}, {
        ['TEST'](state, action) {
          return { myVal: state.myVal + action.payload }
        } 
      })

      const newState = reducer({
        myVal: 1,
      }, {
        type: 'TEST',
        payload: 1,
      })

      assert.equal(2, newState.myVal)
    })
  })
})
