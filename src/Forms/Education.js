/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Education = () => (
  <React.Fragment>
      <FieldArray name="education">
              {({ fields }) =>
              fields.map((name, index) => (
            <div key={name} className='form'>
                <label>Education #{index+1}</label>
                <div>
                    <div className='form-input-name'>Degree</div>
                    <Field
                    name={`${name}.degree`}
                    component="input"
                    type="text"

                    />
                </div>
                <div>
                    <div className='form-input-name'>University Name</div> 
                    <Field
                    name={`${name}.university`}
                    component="input"
                    type="text"
                    />
                </div> 
                <div>
                    <div className='form-input-name'>City</div>
                    <Field
                    name={`${name}.universityCity`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                    <div className='form-input-name'>From</div>
                    <Field
                    name={`${name}.startDateEducation`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>To</div>
                    <Field
                    name={`${name}.endDateEducation`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='button-form-remove'>
                    <button
                      onClick={() => fields.remove(index)}
                    >
                      Remove Education
                    </button>
                </div>
            </div>
         ))
        }
      </FieldArray>
   </React.Fragment>
)

export default Education