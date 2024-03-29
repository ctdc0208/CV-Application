/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const WorkExperienceAcquired = ({ fields }) => (
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
            name={`${exp}.workExperienceAcquired`}
            component="textarea"
            placeholder={`Work Experience # ${index + 1}`}
          />
        </div>
      ))}
  </React.Fragment>
)

const WorkExperience = () => (
  <React.Fragment>
    <div className='label-name'>Work Experience</div>
        <FieldArray name="workExperience">
              {({ fields }) =>
              fields.map((workExperience, index) => (
                <div key={workExperience} className='form margin-top-forms two-column' id="work-experience">
                <div className='two-column-one-two-column font-weight-700 flex-column-margin'>
                    <div className='form-input-name'>Project Name</div>
                    <Field
                    name={`${workExperience}.projectName`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='flex-column-margin'>
                   <div className='form-input-name font-weight-700'>Company Name</div>
                    <Field
                    name={`${workExperience}.companyName`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Start - End Date</div>
                    <Field
                    name={`${workExperience}.startEndDateExperience`}
                    component="input"
                    type="text"
                    />
                </div>
                {/* <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>End Date</div>
                    <Field
                    name={`${workExperience}.endDateExperience`}
                    component="input"
                    type="text"
                    />
                </div> */}
                <div className='form-bullet'>
                <FieldArray name={`${workExperience}.experienceAcquired`} component={WorkExperienceAcquired} />
                </div>
                <div className='button-form-remove-container'>
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

export default WorkExperience


