/**
 * createConstants
 *
 * @param  {Array} constants
 * @return {Array}
 */
export const createConstants = (...constants) => 
  constants.map(constant => {
    const object = {
      [constant]: constant,
    }
    return object
  }).reduce((a, b) => Object.assign(a, b), [])
