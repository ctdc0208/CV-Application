import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Skills = () => (
  <React.Fragment>
        <FieldArray name="skills">
              {({ fields }) =>
              fields.map((name) => (
            <div key={name} className='form margin-top-forms' id="skills">
                <label>Skills</label>
                <div>
                <div className='form-input-name'>Technical</div>
                    <Field
                    name={`${name}.technicalSkill`}
                    component="input"
                    type="text"
                    />
                </div>
                <div>
                <div className='form-input-name'>Software</div>
                    <Field
                    name={`${name}.softwareSkill`}
                    component="input"
                    type="text"
                    />
                </div>  
                <div>
                <div className='form-input-name'>Communication</div>
                    <Field
                    name={`${name}.communicationSkill`}
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