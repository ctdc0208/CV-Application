import React from 'react'
import { connect } from 'react-redux'
import { getFormState } from './FinalFormDuck'

const FormStateFromRedux = ({ state }) => (
  console.log(JSON.stringify(state, 0, 2))
)

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form)
}))(FormStateFromRedux)
