import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Skills = () => (
  <React.Fragment>
        <FieldArray name="skills">
              {({ fields }) =>
              fields.map((skills) => (
            <div key={skills} className='form margin-top-forms' id="skills">
                <label className='label-name skills-label'>Skills</label>
                <div className='flex-column-margin'>
                <div className='form-input-name font-weight-700'>Technical</div>
                    <Field
                    name={`${skills}.technicalSkill`}
                    component="input"
                    type="text"
                    />
                </div>
                <div className='flex-column-margin'>
                <div className='form-input-name font-weight-700'>Software</div>
                    <Field
                    name={`${skills}.softwareSkill`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div className='flex-column-margin'>
                <div className='form-input-name font-weight-700'>Communication</div>
                    <Field
                    name={`${skills}.communicationSkill`}
                    component="input"
                    type="text"
                    />
                </div>
            </div>
             ))
            }
        </FieldArray>
   </React.Fragment>
)

export default Skills