import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.SUBMIT:
      if (state.amountValue.trim() === '' || state.textValue.trim() === '') {
        return state
      }
      return {
        ...state,
        spendings: [
          ...state.spendings,
          { text: state.textValue, amount: state.amountValue },
        ],
        textValue: '',
        amountValue: '',
      }

    case Actions.UPDATE_INPUT:
      const { name, value } = action.payload
      return { ...state, [name]: value }

    default:
      return state
  }
}
