import React from 'react'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'

const Skills = () => (
  <React.Fragment>
        <FieldArray name="skills">
              {({ fields }) =>
              fields.map((name) => (
            <div key={name}>
                <label>Skills</label>
                <div>
                    <Field
                    name={`${name}.technicalSkill`}
                    component="input"
                    type="text"
                    placeholder="Technical"
                    />
                </div>
                <div>
                    <Field
                    name={`${name}.softwareSkill`}
                    component="input"
                    type="text"
                    placeholder="Software"
                    />
                </div>  
                <div>
                    <Field
                    name={`${name}.communicationSkill`}
                    component="input"
                    type="text"
                    placeholder="Communication"
                    />
                </div>
            </div>
             ))
            }
        </FieldArray>
   </React.Fragment>
)

export default Skills