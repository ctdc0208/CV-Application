/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Personal = () => (
  <React.Fragment>
        <FieldArray name="personal">
        {({ fields }) =>
              fields.map((name) => (
            <div>
                <label>Personal Information</label>
                <div>
                    <Field
                    name={`${name}.name`}
                    component="input"
                    type="text"
                    placeholder="Name"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.title`}
                    component="input"
                    type="text"
                    placeholder="Title"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.email`}
                    component="input"
                    type="text"
                    placeholder="Email"
                    />
                </div>  
                <div>
                    <Field
                    name={`${name}.address`}
                    component="input"
                    type="text"
                    placeholder="Address"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.phoneNumber`}
                    component="input"
                    type="text"
                    placeholder="Phone Number"
                    />
                </div>
            </div>
            ))
        }
        </FieldArray>
   </React.Fragment>
)

export default Personal


