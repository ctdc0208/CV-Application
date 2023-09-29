/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const WorkExperienceAcquired = ({ fields }) => (
  <React.Fragment>
    <div>
        <button className="button-add-experience-acquired" type="button" onClick={() => fields.push()}>
          Add Experience
        </button>
    </div>
    {fields.map((exp, index) => (
        <div key={index} className="experiences-acquired">
          <Field 
            name={`${exp}.workExperienceAcquired`}
            component="input"
            type="text-area"
            placeholder={`Work Experience # ${index + 1}`}
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

const WorkExperience = () => (
  <React.Fragment>
        <FieldArray name="workExperience">
              {({ fields }) =>
              fields.map((workExperience, index) => (
            <div key={workExperience} className='form margin-top-forms two-column' id="work-experience">
                <label>Work Experience # {index+1}</label>
                <div className='two-column-one-two-column'>
                    <div className='form-input-name'>Project Name</div>
                    <Field
                    name={`${workExperience}.projectName`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                   <div className='form-input-name'>Company Name</div>
                    <Field
                    name={`${workExperience}.companyName`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                    <div className='form-input-name'>Start Date</div>
                    <Field
                    name={`${workExperience}.startDateExperience`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>End Date</div>
                    <Field
                    name={`${workExperience}.endDateExperience`}
                    component="input"
                    type="text"
                    />
                </div>
                <div   className='form-bullet'>
                <FieldArray name={`${workExperience}.experienceAcquired`} component={WorkExperienceAcquired} />
                </div>
                <div className='button-form-remove-container'>
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

export default WorkExperience


