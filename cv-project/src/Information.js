import React from "react";
import './Information.css';
import Personal from './Forms/Personal';
import WorkExperience from './Forms/WorkExperience';
import ProjectExperience from "./Forms/ProjectExperience";
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

                        "personal":[
                            null
                        ],
                        "education": [
                            null
                        ],
                        "projectExperience": [
                            null
                        ],
                        "workExperience": [
                            null
                        ],
                        "skills": [
                            null
                        ],

                    }}
                    render={({ 
                        handleSubmit, 
                        form: { mutators: { push, pop }}, 
                        form, 
                        submitting, 
                        pristine, 
                        values }) => (
                        <form onSubmit={handleSubmit}>
                            
                    <Personal />

                    <div>
                        <Education />
                            <button
                            type="button"
                            onClick={() => push('education', undefined)}
                            >
                            Add Education
                            </button>
                    </div>

                    <div>
                        <ProjectExperience />
                            <button
                            type="button"
                            onClick={() => push('projectExperience', undefined)}
                            >
                            Add Project Experience
                            </button>
                    </div>

                    <div>
                        <WorkExperience />
                            <button
                            type="button"
                            onClick={() => push('workExperience', undefined)}
                            >
                            Add Work Experience
                            </button>
                    </div>
                                       
                    <Skills />
                
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