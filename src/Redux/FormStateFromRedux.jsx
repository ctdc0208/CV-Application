import React from 'react'
import { connect } from 'react-redux'
import { getFormState } from './FinalFormDuck'


// const FormStateFromRedux = ({ state }) => ((JSON.stringify(state, 0, 2)))

// const FormStateFromRedux = ({ state }) => (console.log(JSON.parse(JSON.stringify(state, 0, 2)).values.personal[0]))

// const FormStateFromRedux = ({ state }) => ((JSON.parse(JSON.stringify(state, 0, 2)).values.personal[0].name))
// export const FormStateFromReduxEmail = ({ state }) => ((JSON.parse(JSON.stringify(state, 0, 2)).values.personal[0].email))

const FormStateFromRedux = ({ state }) => (console.log((JSON.parse(JSON.stringify(state, 0, 2)).values.personal[0])))

//export const Parsedata = JSON.parse(FormStateFromRedux)

// const FormStateFromRedux = ({ state }) => (<pre>{(JSON.stringify(state, 0, 2))}</pre>)

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form)
}))(FormStateFromRedux)

