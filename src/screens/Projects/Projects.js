import * as React from 'react';
import { Switch, Route,} from 'react-router-dom';
import ListProjects from './ListProjects';
import DetailProject from './DetailProject.js';

export default (class Projects extends React.PureComponent {
	state = {};

	render() {
		return (
			<div>
                <h2>Projects</h2>
                <Switch>
                    <Route exact path='/project' component={ListProjects} />
                    <Route path='/project/:id' component={DetailProject} />
                </Switch>
            </div>
		);
	}
});
