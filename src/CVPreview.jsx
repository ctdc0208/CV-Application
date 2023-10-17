import React from "react";
import './styles/CVpreview.css';
import { Provider } from "react-redux";
import store from "./Redux/store";
import FormStateFromRedux from "./Redux/FormStateFromRedux";

function Data() {
    return (
        <Provider store={store}>
            <FormStateFromRedux form="Information" />
        </Provider>
    )
}

function PrintData() {
    return (
        <div>{data.name}</div>
    )
}

function Print() {
    return (
        <div>
            <div>{data.values.personal[0].name}</div>
        </div>
    )
}

class CVPreview extends React.Component {
    render() {
        return (
            <div className="preview-container">
                <div className="preview-container-child">
                <FormStateFromRedux form="Information"></FormStateFromRedux>
                </div>   
            </div>
        )
    }
}

export default CVPreview