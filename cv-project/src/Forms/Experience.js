/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Experience = () => (
  <React.Fragment>
        <FieldArray name="experience">
              {({ fields }) =>
              fields.map((name, index) => (
            <div key={name}>
                <label>Experience #{index+1}</label>
                <div>
                    <Field
                    name={`${name}.projectName`}
                    component="input"
                    type="text"
                    placeholder="Project Name"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.companyName`}
                    component="input"
                    type="text"
                    placeholder="Company"
                    />
                </div>  
                <div>
                    <Field
                    name={`${name}.startDateExperience`}
                    component="input"
                    type="text"
                    placeholder="From"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.endDateExperience`}
                    component="input"
                    type="text"
                    placeholder="To"
                    />
                </div>
				<div>
                    <Field
                    name={`${name}.experienceAcquired`}
                    component="input"
                    type="text"
                    placeholder="Experience Acquired"
                    />
                </div>
            </div>
         ))
        }
      </FieldArray>
   </React.Fragment>
)

export default Experience


