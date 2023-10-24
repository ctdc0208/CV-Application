/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import '../styles/Information.css';

const Education = () => (
  <React.Fragment>
    <div className='label-name'>Education</div>
      <FieldArray name="education">
              {({ fields }) =>
              fields.map((education, index) => (
            <div key={education} className='form margin-top-forms two-column' id="education">
                <div className='two-column-one-two-column flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Course Name</div>
                    <Field
                    name={`${education}.degree`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Institution Name</div> 
                    <Field
                    name={`${education}.university`}
                    component="input"
                    type="text"
                    />
                </div> 
                <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>Stard - End Date</div>
                    <Field
                    name={`${education}.startEndDateEducation`}
                    component="input"
                    type="text"
                    />
                </div>
                {/* <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>End Date</div>
                    <Field
                    name={`${education}.endDateEducation`}
                    component="input"
                    type="text"
                    />
                </div> */}
                <div className='flex-column-margin'>
                    <div className='form-input-name font-weight-700'>City</div>
                    <Field
                    name={`${education}.universityCity`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div className='button-form-remove-container'>
                    <button
                      onClick={() => fields.remove(index)}
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

export default Education