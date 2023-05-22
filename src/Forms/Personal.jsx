/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import '../styles/Information.css';

const Personal = () => (
  <React.Fragment>
        <FieldArray name="personal">
        {({ fields }) =>
              fields.map((name) => (
            <div className='form' id="personal">
                <label>Personal Information</label>
                <div>
                    <div className='form-input-name'>Full Name</div>
                    <Field
                    name={`${name}.name`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                     <div className='form-input-name'>Title</div>
                    <Field
                    name={`${name}.title`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>Email</div>
                    <Field
                    name={`${name}.email`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                    <div className='form-input-name'>Address</div>
                    <Field
                    name={`${name}.address`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>Phone Number</div>
                    <Field
                    name={`${name}.phoneNumber`}
                    component="input"
                    type="text"
                    />
                </div>
            </div>
            ))
        }
        </FieldArray>
   </React.Fragment>
)

export default Personal


