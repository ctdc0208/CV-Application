import React from 'react'
import { connect } from 'react-redux'
import { getFormState } from './FinalFormDuck'

// const FormStateFromRedux = ({ state }) => ((JSON.stringify(state, 0, 2)))

// const FormStateFromRedux = ({ state }) => (console.log(JSON.parse(JSON.stringify(state.values, 0, 2))))

// const FormStateFromRedux = ({ state }) => (console.log(JSON.parse(JSON.stringify(state, 0, 2)).values.personal[0].name))

// const FormStateFromRedux = ({ state }) => (console.log((JSON.parse(JSON.stringify(state, 0, 2)).values.personal[0])))

//export const Parsedata = JSON.parse(FormStateFromRedux)

const FormStateFromRedux = ({ state }) => (
  <div>
    <div>{state.values.personal[0].name}</div>
    <pre>{(JSON.stringify(state, 0, 2))}</pre>
  </div>
)

/*
const FormStateFromRedux = ({ state }) => (
  [
    <pre>{JSON.stringify(state, 0, 2)}</pre>
  ]
  )
*/

// const FormStateFromRedux = (state) =>(console.log(JSON.parse(JSON.stringify(state, 0, 2))))

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form)
}))(FormStateFromRedux)