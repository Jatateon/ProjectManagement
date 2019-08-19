import * as React from 'react';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';
import styles from './DetailProject.module.scss';
import LinkTable from '../../components/LinkTable/LinkTable';

export default (class DetailProject extends React.PureComponent {
	state = {
		response:{},
		data:[]
	};

	componentDidMount() {
		this.getProject();
	}

	getProject = async () => {
		const url = 'http://127.0.0.1:8000/api/projects/';
		const id = parseInt(this.props.match.params.id, 10);
        console.log("TCL: DetailProject -> getProject -> id", id);
		console.log("TCL: DetailProject -> getProject -> url + id", url + id)
		try {
			const response = await WebServices.getDataFromFullUrl({ fullUrl: url + id });
			const nextSatate = produce(this.state, (draft) => {
				draft.data = response.data[0];
				console.log('TCL: Projects -> nextSatate -> response.data', response.data);
			});
			this.setState(nextSatate);
		} catch (error) {
			console.log('TCL: Projects -> getData -> error', error);
		}
	}

	render() {
		const {data} = this.state;
		return (
			<div className={styles.main}>
				<strong>Ficha del proyecto : {data && data.id} </strong>
				<LinkTable to={'/Project'} icon={'back'} />
				<div>
					<p> <strong>Clave:</strong> {data && data.key} <strong>Nombre:</strong> {data && data.name}</p>
					<p> <strong>Objetivo:</strong> {data && data.objective} </p>
				</div>
				<div>
					<p>Avance</p>
					{data && data.progress} 
				</div>
			</div>
		);
	}
});
