# Reduxxer

Reduxxer is a fully tested, functional library for reducing boilerplate within your React/Redux actions and reducers. 


## Actions

### createConstants

Create an object, encapsulating your action types.

``` js
import { createConstants } from 'reduxer'

const constants = createConstants(
  'ADD_ITEM', 'REMOVE_ITEM',
)

export const addItem = item => {
  return dispatch => {
    dispatch({
      type: constants.ADD_ITEM,
      payload: item,
    })
  }
}
```

## Reducers

### create

Create clean reducer code without using length switch statements.

```js
import { create } from 'reduxer'

const init = {
 name: 'Ewan Valentine',
}

const person = create(init, {
  [constants.UPDATE_NAME](state, action) {
    return { ...state, name: action.payload.name }
  }
})

export default person
```
