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
              fields.map((name, index) => (
            <div key={name} className='form margin-top-forms' id="work-experience">
                <label>Work Experience #{index+1}</label>
                <div>
                    <div className='form-input-name'>Project Name</div>
                    <Field
                    name={`${name}.projectName`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                   <div className='form-input-name'>Company</div>
                    <Field
                    name={`${name}.companyName`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                    <div className='form-input-name'>From</div>
                    <Field
                    name={`${name}.startDateExperience`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>To</div>
                    <Field
                    name={`${name}.endDateExperience`}
                    component="input"
                    type="text"
                    />
                </div>
                <div   className='form-bullet'>
                <FieldArray name={`${name}.experienceAcquired`} component={WorkExperienceAcquired} />
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


