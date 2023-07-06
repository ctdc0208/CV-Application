/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import '../styles/Information.css';

const Education = () => (
  <React.Fragment>
      <FieldArray name="education">
              {({ fields }) =>
              fields.map((education, index) => (
            <div key={education} className='form margin-top-forms' id="education">
                <label>Education #{index+1}</label>
                <div>
                    <div className='form-input-name'>Degree</div>
                    <Field
                    name={`${education}.degree`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>University Name</div> 
                    <Field
                    name={`${education}.university`}
                    component="input"
                    type="text"
                    />
                </div> 
                <div>
                    <div className='form-input-name'>City</div>
                    <Field
                    name={`${education}.universityCity`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                    <div className='form-input-name'>From</div>
                    <Field
                    name={`${education}.startDateEducation`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                    <div className='form-input-name'>To</div>
                    <Field
                    name={`${education}.endDateEducation`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='button-form-remove-container'>
                    <button
                      className='button-form-remove'
                      onClick={() => fields.remove(index)}
                    >
                      Remove
                    </button>
                    <div class="button-divider"></div>
                </div>
            </div>
         ))
        }
      </FieldArray>
   </React.Fragment>
)

export default Education