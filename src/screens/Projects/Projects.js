import * as React from 'react';
import WebServices from '../../WebServices/WebServices';
import { async } from 'q';

export default (class Projects extends React.PureComponent {
    state = {
        response: {}
    }

    componentDidMount() {
        this.getData();
     }

    getData = async () => {
        const url = "http://127.0.0.1:8000/api/projects/2";
        console.log("TCL: Projects -> getData -> url", url);
        try {
            const response = await WebServices.getDataFromFullUrl({ fullUrl: url });
            console.log("TCL: Projects -> getData -> response", response);            
        } catch (error) {
            console.log("TCL: Projects -> getData -> error", error);
        }
    }

    render() {
        return (
            <p>Hola</p>
        );
    }
});