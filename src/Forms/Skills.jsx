import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Skills = () => (
  <React.Fragment>
        <FieldArray name="skills">
              {({ fields }) =>
              fields.map((skills) => (
            <div key={skills} className='form margin-top-forms' id="skills">
                <label>Skills</label>
                <div>
                <div className='form-input-name'>Technical</div>
                    <Field
                    name={`${skills}.technicalSkill`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                <div className='form-input-name'>Software</div>
                    <Field
                    name={`${skills}.softwareSkill`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                <div className='form-input-name'>Communication</div>
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