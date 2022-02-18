/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'


const Skills = () => (
  <React.Fragment>
            <div>
                <label>Skills</label>
                <div>
                    <Field
                    name="technicalSkill"
                    component="input"
                    type="text"
                    placeholder="technical"
                    />
                </div>
                <div>
                    <Field
                    name="softwareSkill"
                    component="input"
                    type="text"
                    placeholder="Software"
                    />
                </div>  
                <div>
                    <Field
                    name="communicationSkill"
                    component="input"
                    type="text"
                    placeholder="Communication"
                    />
                </div>
            </div>
   </React.Fragment>
)

export default Skills