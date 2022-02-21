import React from "react";
import './Information.css';
import Personal from './Forms/Personal';
import Experience from './Forms/Experience';
import Education from './Forms/Education';
import Skills from "./Forms/Skills";
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

class Information extends React.Component {   
    render() {
        return (
            <div className="main-container">
                <div className="container">
                <Form 
                    onSubmit={onSubmit}
                    mutators={{
                        ...arrayMutators
                      }}
                    initialValues={{
                        "experience": [
                            null
                        ],
                        "education": [
                            null
                        ],
                        "skills": [
                            null
                        ],
                    }}
                    render={({ handleSubmit, form: { mutators: { push, pop }}, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                    <Personal />

                    <div>
                        <Experience />
                            <button
                            type="button"
                            onClick={() => push('experience', undefined)}
                            >
                            Add Experience
                            </button>
                            <button type="button" onClick={() => pop('experience')}>
                            Remove Experience
                            </button>
                    </div>

                    <div>
                        <Education />
                            <button
                            type="button"
                            onClick={() => push('education', undefined)}
                            >
                            Add Education
                            </button>
                            <button type="button" onClick={() => pop('education')}>
                            Remove Education
                            </button>
                    </div>
                   
                    <div>
                        <Skills />
                            <button
                            type="button"
                            onClick={() => push('skills', undefined)}
                            >
                            Add Skills
                            </button>
                            <button type="button" onClick={() => pop('skills')}>
                            Remove Skills
                            </button>
                    </div>

                        <div className="buttons">
                            <button 
                            type="submit" 
                            disabled={submitting || pristine}               
                            >
                            Submit
                            </button>
                            <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                            >
                            Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    )}
                />
                </div>
            </div>
        );
    }
}

export default Information