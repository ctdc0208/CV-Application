/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import '../styles/Information.css';

const Personal = () => (
  <React.Fragment>
        <label className='label-name'>Personal Information</label>
        <FieldArray name="personal">
        {({ fields }) =>
              fields.map((personal) => (
            <div key={personal} className='form two-column margin-top-forms' id="personal">
                <div className='two-column-one-two-column flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Full Name</div>
                    <Field
                    name={`${personal}.name`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Email Address</div>
                    <Field
                    name={`${personal}.email`}
                    component="input"
                    type="text"
                    />
                </div>  
                {/* <div className='flex-column-margin'>
                     <div className='form-input-name font-weight-700'>Title</div>
                    <Field
                    name={`${personal}.title`}
                    component="input"
                    type="text"
                    />
                </div> */}
                <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Phone Number</div>
                    <Field
                    name={`${personal}.phoneNumber`}
                    component="input"
                    type="text"
                    />
                </div>
                {/* <div className='two-column-one-three-column font-weight-700 flex-column-margin padding-one-rem'>
                    <div className='form-input-name'>Address</div>
                    <Field
                    name={`${personal}.address`}
                    component="input"
                    type="text"
                    />
                </div> */}
                <div className='two-column-one-three-column font-weight-700 flex-row-margin padding-one-rem'>
                    <div className='form-input-name'>Github Link:</div>
                    <Field
                    name={`${personal}.githubLink`}
                    component="input"
                    type="text"
                    />
                </div>
                {/* <div className='two-column-one-three-column font-weight-700 flex-row-margin padding-one-rem'>
                    <div className='form-input-name'>LinkedIn Link:</div>
                    <Field
                    name={`${personal}.linkedInLink`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='two-column-one-three-column font-weight-700 flex-row-margin padding-one-rem'>
                    <div className='form-input-name'>Portfolio Link:</div>
                    <Field
                    name={`${personal}.portfolioLink`}
                    component="input"
                    type="text"
                    />
                </div> */}
            </div>
            ))
        }
        </FieldArray>
   </React.Fragment>
)

export default Personal


