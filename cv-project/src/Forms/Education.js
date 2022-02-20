/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Education = () => (
  <React.Fragment>
      <FieldArray name="education">
              {({ fields }) =>
              fields.map((name) => (
            <div key={name}>
                <label>Education</label>
                <div>
                    <Field
                    name="degree"
                    component="input"
                    type="text"
                    placeholder="Degree"
                    />
                </div>
                <div>
                    <Field
                    name="university"
                    component="input"
                    type="text"
                    placeholder="University Name"
                    />
                </div> 
                <div>
                    <Field
                    name="universityCity"
                    component="input"
                    type="text"
                    placeholder="City"
                    />
                </div>  
                <div>
                    <Field
                    name="startDateEducation"
                    component="input"
                    type="text"
                    placeholder="From"
                    />
                </div>
                <div>
                    <Field
                    name="endDateEducation"
                    component="input"
                    type="text"
                    placeholder="To"
                    />
                </div>
            </div>
         ))
        }
      </FieldArray>
   </React.Fragment>
)

export default Education