/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <div>
        <input {...input} type={type} placeholder={label} />
      </div>
    </div>
  )


const ExperienceAcquired = ({ fields, meta: { error } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>
          Add Experience Acquired
        </button>
      </li>
      {fields.map((exp, index) => (
        <li key={index}>
          <Field
            name={exp}
            type="text"
            component={renderField}
            label={`Experienced #${index + 1}`}
          />
           <span
            onClick={() => fields.remove(index)}
          >
              ❌
          </span>
        </li>
      ))}
    </ul>
  )

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
                <FieldArray name={`${name}.experienceAcquired`} component={ExperienceAcquired} />
                </div>
                <div>
                    <button
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      Remove Experience
                    </button>
                </div>
            </div>
         ))
        }
      </FieldArray>
   </React.Fragment>
)

export default Experience


