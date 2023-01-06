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
          <div className='form-input-name'>{`Project Experienced #${index + 1}`}</div>
          <Field
            name={`${exp}.projectExperienceAcquired`}
            component="input"
            type="text"
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
            <div key={name} className='form'>
                <label>Project Experience #{index+1}</label>
                <div>
                    <div className='form-input-name'>Project Name</div>
                    <Field
                    name={`${name}.projectName`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>From</div>
                    <Field
                    name={`${name}.startDateProject`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>To</div>
                    <Field
                    name={`${name}.endDateProject`}
                    component="input"
                    type="text"
                    />
                </div>
                <div  className='form-bullet'>
                <FieldArray name={`${name}.projectExperienceAcquired`} component={ProjectExperienceAcquired} />
                </div>
                <div  className='button-form-remove'>
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


