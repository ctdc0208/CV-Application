import React from "react";
import './styles/CVpreview.css';
import { Provider } from "react-redux";
import store from "./Redux/store";
import FormStateFromRedux from "./Redux/FormStateFromRedux";


export class GetDataForm extends React.Component {
    render() {
        return (
            <FormStateFromRedux form="example" />
        )
    }
}

class CVPreview extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <div className="preview-container">
                <div className="preview-container-child">
                <div form="example"></div>
                <FormStateFromRedux form="example"/>
                </div>    
            </div>
            </Provider>
        )
    }
}

export default CVPreview