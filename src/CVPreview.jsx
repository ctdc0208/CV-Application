import React from "react";
import './styles/CVpreview.css';
import { Provider } from "react-redux";
import store from "./Redux/store";
import FormStateFromRedux from "./Redux/FormStateFromRedux";

class CVPreview extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="preview-container">
                <div className="preview-container-child">
                </div>   
            </div>
        )
    }
}

export default CVPreview