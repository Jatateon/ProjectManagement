import * as React from 'react';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';
import styles from './DetailProject.module.scss';
import LinkTable from '../../components/LinkTable/LinkTable';
import ProgressRadialBarChart from '../../components/Charts/ProgressRadialBarChart';

export default (class DetailProject extends React.PureComponent {
	state = {
		response: {},
		data: {}
	};

	componentDidMount() {
		this.getProject();
	}

	getProject = async () => {
		const id = parseInt(this.props.match.params.id, 10);
		try {
			const response = await WebServices.getDataFromFullUrl({ params: '/projects/' + id });
			console.log('TCL: DetailProject -> getProject -> response', response);
			const nextSatate = produce(this.state, (draft) => {
				draft.data = response.data;
				const progress = response.data.progress;
				switch (true) {
					case progress < 40:
						draft.data.fill = 'RED';
						break;
					case progress < 80:
						draft.data.fill = 'ORANGE';
						break;
					default:
						draft.data.fill = '#A4DE6C';
						break;
				}
			});
			this.setState(nextSatate);
			console.log('TCL: DetailProject -> getProject -> nextSatate', nextSatate);
		} catch (error) {
			console.log('TCL: Projects -> getData -> error', error);
		}
	};

	render() {
		const { data } = this.state;
		console.log('TCL: DetailProject -> render -> data', data);
		return (
			<div className={styles.main + ' ' + styles.vertical}>
				<div className={styles.vertical_item}>
					<strong>Project File : {data && data.id} </strong>
					<LinkTable to={'/Project'} icon={'back'} />
				</div>
				<div className={styles.vertical_item}>
					<div className={styles.horizontal}>
						<div className={styles.horizontal_item}>
							<div className={styles.vertical}>
								<p>
									<strong>KEY:</strong> {data && data.key} <strong>Name:</strong> {data && data.name}
								</p>
								<p>
									<strong>Objective:</strong> {data && data.objective}
								</p>
							</div>
						</div>
						<div className={styles.horizontal_item}>
							<p>Current progress</p>
							<ProgressRadialBarChart data={[ data ]} dataKey={'progress'} />
						</div>
					</div>
				</div>
			</div>
		);
	}
});
