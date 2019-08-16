import * as React from 'react';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';
import { async } from 'q';
import Table from '../../components/Table/Table';
import { Route, Redirect, Link} from 'react-router-dom';

export default (class ListProjects extends React.PureComponent {
	state = {
		response: {},
		data: [],
		headers: [
			{
				name: 'Editar',
				value: 'id',
				type: 'link',
                footer: '',
                icon:'view'
			},
			{
				name: 'Nombre',
				value: 'name',
				footer: ''
			},
			{
				name: 'Objetivo',
				value: 'objective',
				footer: ''
			},
			{
				name: 'Avance',
				value: 'progress',
				footer: ''
			}
		]
	};

	componentDidMount() {
        this.getData();
        console.log("TCL: Projects -> componentDidMount -> this.props.match.params", this.props.match.params)
	}

	getData = async () => {
		const url = 'http://127.0.0.1:8000/api/projects/';
		console.log('TCL: Projects -> getData -> url', url);
		try {
			const response = await WebServices.getDataFromFullUrl({ fullUrl: url });
			const nextSatate = produce(this.state, (draft) => {
				draft.data = response.data;
				console.log('TCL: Projects -> nextSatate -> response.data', response.data);
			});
			this.setState(nextSatate);
		} catch (error) {
			console.log('TCL: Projects -> getData -> error', error);
		}
	};

	onClickRow = (e) => {
        const {history} = this.props;
        history.push({
            pathname:'/projects/',
            search:'id='+e
        });
        
        console.log("TCL: Projects -> onClickRow -> this.props.match.params", this.props.match.params);

	};

	render() {
		const { data, headers } = this.state;
		return (
			<div>
				<div>Hola</div>
				<div>
					{data && data.length > 1 && <Table data={data} headers={headers} onClickRow={this.onClickRow} />}
				</div>
			</div>
		);
	}
});
