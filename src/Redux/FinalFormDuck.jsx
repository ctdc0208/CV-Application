// QUACK! This is a duck. https://github.com/erikras/ducks-modular-redux

// Actions
const UPDATE_FORM_STATE = '/finalForm/UPDATE_FORM_STATE'

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case UPDATE_FORM_STATE:
            return {
                ...state,
                [action.form]: action.payload
            }
        default:
            return state
    }
}

// Action Creators
export const updateFormState = (form, state) => ({
    type: UPDATE_FORM_STATE,
    form,
    payload: state
})

// Selectors
export const getFormState = (state, form) =>
    (state && state.finalForm && state.finalForm[form]) || {}

export const getChange = ({ state }) => (
    <pre>{JSON.stringify(state, 0, 2)}</pre>
)