const numberReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.step
      case 'DECREMENT':
        return state - action.step
    }
  }

  export default numberReducer