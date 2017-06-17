import 'babel-polyfill'
import { createConstants } from './actions'

import assert from 'assert'

describe('Actions', () => {
  describe('createConstants', () => {

    it('should return a constant when a given string is given with the same value', () => {
      const constants = createConstants('TEST', 'ANOTHER')
      assert.equal('TEST', constants.TEST)
    })

    it('should return four constants if four values are given', () => {
      const constants = createConstants('TEST', 'ANOTHER', 'YET_ANOTHER', 'HELLO')
      assert.equal(4, Object.keys(constants).length)
    })
  })
})
