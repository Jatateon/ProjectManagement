import * as React from 'react';
import styles from './Input.module.scss';

export default class Input extends React.Component {
	render() {
		const { value, onChange, estilos, label } = this.props;

		return (
			<div className={styles.main + ' ' + styles.vertical}>
                <label className={styles.vertical_item + ' ' + styles.label}>{label}</label>
				<input
					className={styles.default + ' ' + styles.vertical_item}
					value={value}
					onChange={onChange}
					style={estilos ? {estilos} : {}}
				/>
			</div>
		);
	}
}
