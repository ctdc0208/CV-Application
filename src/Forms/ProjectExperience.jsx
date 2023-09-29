/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const ProjectExperienceAcquired = ({ fields }) => (
  <React.Fragment>
    <div>
        <button className="button-add-experience-acquired" type="button" onClick={() => fields.push()}>
          Add Experience
        </button>
    </div>
    {fields.map((exp, index) => (
        <div key={index} className="experiences-acquired">
          <Field
            name={`${exp}.projectExperienceAcquired`}
            component="input"
            type="text"
            placeholder={`Project Experience # ${index + 1}`}
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
              fields.map((projectExperience, index) => (
            <div key={projectExperience} className='form margin-top-forms two-column' id="project-experience">
                <label>Project Experience #{index+1}</label>
                <div className='two-column-one-three-column'>
                    <div className='form-input-name font-weight-700'>Project Name</div>
                    <Field
                    name={`${projectExperience}.projectName`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name font-weight-700'>Start Date</div>
                    <Field
                    name={`${projectExperience}.startDateProject`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name font-weight-700'>End Date</div>
                    <Field
                    name={`${projectExperience}.endDateProject`}
                    component="input"
                    type="text"
                    />
                </div>
                <div  className='form-bullet'>
                <FieldArray name={`${projectExperience}.projectExperienceAcquired`} component={ProjectExperienceAcquired} />
                </div>
                <div  className='button-form-remove-container'>
                    <button
                      className='button-form-remove'
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                    <div className="button-divider"></div>
                </div>
            </div>
         ))
        }
      </FieldArray>
   </React.Fragment>
)

export default ProjectExperience


