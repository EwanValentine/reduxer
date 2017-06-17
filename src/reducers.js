/**
 * Create reducer
 * 
 * @param {Object} initialState
 * @param {Array}  handlers
 *
 * @return {Func|Object}
 */
export const create = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}
