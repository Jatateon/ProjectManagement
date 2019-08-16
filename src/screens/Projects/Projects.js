import * as React from 'react';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';
import { async } from 'q';
import Table from '../../components/Table/Table';
import { Switch, Route,} from 'react-router-dom';
import ListProjects from './ListProjects';
import Project from './Project';

export default (class Projects extends React.PureComponent {
	state = {};

	render() {
		const { data, headers } = this.state;
		return (
			<div>
                <h2>Projects</h2>
                <Switch>
                    <Route exac path='/projects' component={ListProjects} />
                    <Route path='/project/:id' component={Project} />
                </Switch>
            </div>
		);
	}
});
