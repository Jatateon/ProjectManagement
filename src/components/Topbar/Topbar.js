import * as React from 'react';
import { Link } from 'react-router-dom';

export default (class Topbar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>                </ul>
            </div>
        );
    }
});