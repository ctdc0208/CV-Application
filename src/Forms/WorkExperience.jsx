/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const WorkExperienceAcquired = ({ fields }) => (
  <React.Fragment>
    <div>
        <button type="button" onClick={() => fields.push()}>
          Add Work Experience Acquired
        </button>
    </div>
    {fields.map((exp, index) => (
        <div key={index}>
          <Field
            name={`${exp}.workExperienceAcquired`}
            component="input"
            type="text"
            placeholder={`Work Experienced #${index + 1}`}

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
            <div key={workExperience} className='form margin-top-forms' id="work-experience">
                <label>Work Experience #{index+1}</label>
                <div>
                    <div className='form-input-name'>Project Name</div>
                    <Field
                    name={`${workExperience}.projectName`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                   <div className='form-input-name'>Company</div>
                    <Field
                    name={`${workExperience}.companyName`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                    <div className='form-input-name'>From</div>
                    <Field
                    name={`${workExperience}.startDateExperience`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>To</div>
                    <Field
                    name={`${workExperience}.endDateExperience`}
                    component="input"
                    type="text"
                    />
                </div>
                <div   className='form-bullet'>
                <FieldArray name={`${workExperience}.experienceAcquired`} component={WorkExperienceAcquired} />
                </div>
                <div>
                    <button
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      Remove Work Experience
                    </button>
                </div>
            </div>
         ))
        }
      </FieldArray>
   </React.Fragment>
)

export default WorkExperience


