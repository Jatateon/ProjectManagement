import * as React from 'react';
import styles from './DetailProject.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import produce from 'immer/dist/immer';
import WebServices from '../../WebServices/WebServices';

export default (class CreateProject extends React.PureComponent {
	state = {
		nameProject: '',
		keyProject: '',
		objectiveProject: '',
		progressProject: 0
	};

	onChangeInput = (event, input) => {
		console.log('TCL: CreateProject -> onChangeInput -> input', event.target.value);
		const nextstate = produce(this.state, (draft) => {
			draft[input] = event.target.value;
		});
		this.setState(nextstate);
	};

	backClick = (e) => {
		const { history } = this.props;
		history.push({
			pathname: '/Project/'
		});
	};

	saveClick = (e) => {
		e.preventDefault();
		this.saveProject();
	};

	saveProject = async () => {
		const { nameProject, keyProject, objectiveProject, progressProject } = this.state;
		const project = {};
		try {
			project.name = nameProject;
			project.key = keyProject;
			project.objective = objectiveProject;
			project.progress = progressProject;

			const response = await WebServices.postProject({ project: project });
			console.log('TCL: DetailProject -> getProject -> response', response);

			const nextstate = produce(this.state, (draft) => {
				draft.nameProject = '';
				draft.keyProject = '';
				draft.objectiveProject = '';
				draft.progress = 0;
			});

			this.setState(nextstate);
			
			const { history } = this.props;
			history.push({
				pathname: '/Project/'
			});

		} catch (error) {
			console.log('TCL: Projects -> getData -> error', error);
		}
	};

	render() {
		const { nameProject, keyProject, objectiveProject, progressProject } = this.state;
		return (
			<div className={styles.main + ' ' + styles.vertical}>
				<h2>Fill inputs about project</h2>
				<form>
					<Input
						label={'Project Key'}
						value={keyProject}
						onChange={(event) => this.onChangeInput(event, 'keyProject')}
					/>
					<Input
						label={'Name of Project'}
						value={nameProject}
						onChange={(event) => this.onChangeInput(event, 'nameProject')}
					/>
					<Input
						label={'Objective of Project'}
						value={objectiveProject}
						onChange={(event) => this.onChangeInput(event, 'objectiveProject')}
					/>
					<Input
						label={'Current progress'}
						value={progressProject}
						onChange={(event) => this.onChangeInput(event, 'progressProject')}
					/>
					<div className={styles.vertical_item + ' ' + styles.buttons}>
						<div className={styles.horizontal}>
							<Button text={'Back'} type={'back'} alignIcon={'right'} onClick={this.backClick} />
							<Button text={'Save'} type={'save'} alignIcon={'right'} onClick={this.saveClick} />
						</div>
					</div>
				</form>
			</div>
		);
	}
});
