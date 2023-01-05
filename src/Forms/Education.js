/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Education = () => (
  <React.Fragment>
      <FieldArray name="education">
              {({ fields }) =>
              fields.map((name, index) => (
            <div key={name}>
                <label>Education #{index+1}</label>
                <div>
                    <Field
                    name={`${name}.degree`}
                    component="input"
                    type="text"
                    placeholder="Degree"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.university`}
                    component="input"
                    type="text"
                    placeholder="University Name"
                    />
                </div> 
                <div>
                    <Field
                    name={`${name}.universityCity`}
                    component="input"
                    type="text"
                    placeholder="City"
                    />
                </div>  
                <div>
                    <Field
                    name={`${name}.startDateEducation`}
                    component="input"
                    type="text"
                    placeholder="From"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.endDateEducation`}
                    component="input"
                    type="text"
                    placeholder="To"
                    />
                </div>
                <div>
                    <button
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
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