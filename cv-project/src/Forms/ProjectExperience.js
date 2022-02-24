/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const ProjectExperienceAcquired = ({ fields }) => (
  <React.Fragment>
    <div>
        <button type="button" onClick={() => fields.push()}>
          Add Project Experience Acquired
        </button>
    </div>
    {fields.map((exp, index) => (
        <div key={index}>
          <Field
            name={`${exp}.projectExperienceAcquired`}
            component="input"
            type="text"
            placeholder={`Project Experienced #${index + 1}`}

          />
           <span
            onClick={() => fields.remove(index)}
          >
              ❌
          </span>
        </div>
      ))}
  </React.Fragment>
)

const ProjectExperience = () => (
  <React.Fragment>
        <FieldArray name="projectExperience">
              {({ fields }) =>
              fields.map((name, index) => (
            <div key={name}>
                <label>Project Experience #{index+1}</label>
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
                    name={`${name}.startDateProject`}
                    component="input"
                    type="text"
                    placeholder="From"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.endDateProject`}
                    component="input"
                    type="text"
                    placeholder="To"
                    />
                </div>
                <div>
                <FieldArray name={`${name}.projectExperienceAcquired`} component={ProjectExperienceAcquired} />
                </div>
                <div>
                    <button
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      Remove Project Experience
                    </button>
                </div>
            </div>
         ))
        }
      </FieldArray>
   </React.Fragment>
)

export default ProjectExperience


