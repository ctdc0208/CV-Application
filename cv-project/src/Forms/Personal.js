/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Field } from 'react-final-form'


const Personal = () => (
  <React.Fragment>

            <div>
                <label>Personal Information</label>
                <div>
                    <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                    />
                </div>
                <div>
                    <Field
                    name="title"
                    component="input"
                    type="text"
                    placeholder="Title"
                    />
                </div>
                <div>
                    <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="Email"
                    />
                </div>  
                <div>
                    <Field
                    name="address"
                    component="input"
                    type="text"
                    placeholder="Address"
                    />
                </div>
                <div>
                    <Field
                    name="phoneNumber"
                    component="input"
                    type="text"
                    placeholder="Phone Number"
                    />
                </div>
            </div>
   </React.Fragment>
)

export default Personal


