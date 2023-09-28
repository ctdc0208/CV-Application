/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import '../styles/Information.css';

const Personal = () => (
  <React.Fragment>
        <FieldArray name="personal">
        {({ fields }) =>
              fields.map((personal) => (
            <div key={personal} className='form' id="personal">
                <label>Personal Information</label>
                <div className='personal-name'>
                    <div className='form-input-name'>Full Name</div>
                    <Field
                    name={`${personal}.name`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>Email Address</div>
                    <Field
                    name={`${personal}.email`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                     <div className='form-input-name'>Title</div>
                    <Field
                    name={`${personal}.title`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>Phone Number</div>
                    <Field
                    name={`${personal}.phoneNumber`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='personal-address'>
                    <div className='form-input-name'>Address</div>
                    <Field
                    name={`${personal}.address`}
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


