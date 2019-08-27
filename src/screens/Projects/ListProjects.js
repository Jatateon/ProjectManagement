import * as React from 'react';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';
import Table from '../../components/Table/Table';
import styles from './DetailProject.module.scss';
import Button from '../../components/Button/Button';

export default (class ListProjects extends React.PureComponent {
	state = {
		response: {},
		data: [],
		headers: [
			{
				name: 'Edit',
				value: 'id',
				type: 'link',
                footer: '',
				icon:'view',
				flex:1,
			},
			{
				name: 'Name',
				value: 'name',
				footer: '',
				flex:2,
			},
			{
				name: 'Objective',
				value: 'objective',
				footer: '',
				flex:6,
			},
			{
				name: 'Progress',
				value: 'progress',
				footer: '',
				flex:1,
			}
		]
	};

	componentDidMount() {
        this.getData();
        console.log("TCL: Projects -> componentDidMount -> this.props.match.params", this.props.match.params)
	}

	getData = async () => {
		try {
			const response = await WebServices.getDataFromFullUrl({ params: '/projects' });
			const nextSatate = produce(this.state, (draft) => {
				draft.data = response.data;
				console.log('TCL: Projects -> nextSatate -> response.data', response.data);
			});
			this.setState(nextSatate);
		} catch (error) {
			console.log('TCL: Projects -> getData -> error', error);
		}
	};

	onClickButton = (e) => {
        const {history} = this.props;
        history.push({
			pathname:'/createProject/'
		});
		console.log("TCL: ListProjects -> onClickButton -> history", history);
	};

	render() {
		const { data, headers } = this.state;
		return (
			<div className={styles.main}>
				<div className={styles.vertical}>
					<div className={styles.vertical_item + ' ' + styles.horizontal}>
						<Button type={"add"} alignIcon={"right"} text={"New Project"} onClick={this.onClickButton}/>
					</div>
					<div className={styles.vertical_item}>
						<div>
							{data && data.length > 1 && <Table data={data} headers={headers} onClickRow={this.onClickRow} />}
						</div>
					</div>
				</div>
			</div>
		);
	}
});
