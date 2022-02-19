/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'


const Experience = () => (
  <React.Fragment>
            <div>
                <label>Experience</label>
                <div>
                    <Field
                    name="projectName"
                    component="input"
                    type="text"
                    placeholder="Project Name"
                    />
                </div>
                <div>
                    <Field
                    name="companyName"
                    component="input"
                    type="text"
                    placeholder="Company"
                    />
                </div>  
                <div>
                    <Field
                    name="startDateExperience"
                    component="input"
                    type="text"
                    placeholder="From"
                    />
                </div>
                <div>
                    <Field
                    name="endDateExperience"
                    component="input"
                    type="text"
                    placeholder="To"
                    />
                </div>
				<div>
                    <Field
                    name="experienceAcquired"
                    component="input"
                    type="text"
                    placeholder="Experience Acquired"
                    />
                </div>
            </div>
   </React.Fragment>
)

export default Experience


