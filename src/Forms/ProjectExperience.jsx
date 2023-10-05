/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const ProjectExperienceAcquired = ({ fields }) => (
  <React.Fragment>
    <div>
        <button className="button-add-experience-acquired" type="button" onClick={() => fields.push()}>
          <svg className='add-icon icon-size'></svg>
          <div className='bullet-icon-text'>Add Experiences</div>
        </button>
    </div>
    {fields.map((exp, index) => (
        <div key={index} className="experiences-acquired">
          <div>
            <div className='circle-icon icon-size bullet-icon'></div>
           <span className='remove-bullet icon-size bullet-icon icon-button'
            onClick={() => fields.remove(index)}
            >
            </span>
          </div>
          <Field
            name={`${exp}.projectExperienceAcquired`}
            component="textarea"
            type="text"
            placeholder={`Project Experience # ${index + 1}`}
          />
        </div>
      ))}
  </React.Fragment>
)

const ProjectExperience = () => (
  <React.Fragment>
    <div className='label-name'>Project Experience</div>
        <FieldArray name="projectExperience">
              {({ fields }) =>
              fields.map((projectExperience, index) => (
            <div key={projectExperience} className='form margin-top-forms two-column' id="project-experience">
                <div className='two-column-one-three-column flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Project Name</div>
                    <Field
                    name={`${projectExperience}.projectName`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Start Date</div>
                    <Field
                    name={`${projectExperience}.startDateProject`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='flex-column-margin'>
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
                      <svg className='close-icon icon-size'></svg>
                      <div className='bullet-icon-text'>Delete</div>
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


