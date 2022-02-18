/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'


const Education = () => (
  <React.Fragment>
            <div>
                <label>Experience</label>
                <div>
                    <Field
                    name="courseName"
                    component="input"
                    type="text"
                    placeholder="Course Name"
                    />
                </div>
                <div>
                    <Field
                    name="institutionName"
                    component="input"
                    type="text"
                    placeholder="Institution Name"
                    />
                </div>  
                <div>
                    <Field
                    name="startDateEducation"
                    component="input"
                    type="text"
                    placeholder="Start Date"
                    />
                </div>
                <div>
                    <Field
                    name="endDateEducation"
                    component="input"
                    type="text"
                    placeholder="End Date"
                    />
                </div>
            </div>
   </React.Fragment>
)

export default Education