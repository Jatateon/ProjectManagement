import * as React from 'react';
import { Switch, Route,} from 'react-router-dom';
import ListProjects from './ListProjects';
import DetailProject from './DetailProject.js';
import CreateProject from './CreateProject.js';
import styles from './DetailProject.module.scss';

export default (class Projects extends React.PureComponent {
	state = {};

	render() {
		return (
			<div className={styles.main + ' ' + styles.vertical}>
                <h2 className={styles.vertical_item}>Projects</h2>
                <div className={styles.vertical_item}>
                    <Switch>
                        <Route exact path='/project' component={ListProjects} />
                        <Route path='/project/:id' component={DetailProject} />
                    </Switch>
                </div>
            </div>
		);
	}
});
