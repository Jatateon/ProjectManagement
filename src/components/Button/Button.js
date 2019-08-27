import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import {
	IconSave,
	IconBack,
	IconEdit,
	IconAddMark,
	IconRemoveMark,
	IconUpdate,
	IconSearch,
	IconPlus,
	IconForward,
	IconRemove
} from '../../resources/svg/Icon';

export default class Button extends React.Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
		over: PropTypes.bool,
		alignIcon: PropTypes.string
	};

	selectIcon = (type) => {
		switch (type) {
			case 'back':
				return <IconBack className={styles.icon} />;
			case 'save':
				return <IconSave className={styles.icon} />;
			case 'edit':
				return <IconEdit className={styles.icon} />;
			case 'update':
				return <IconUpdate className={styles.icon} />;
			case 'search':
				return <IconSearch className={styles.icon} />;
			case 'plus':
				return <IconPlus className={styles.icon} />;
			case 'forward':
				return <IconForward className={styles.icon} />;
			case 'remove':
				return <IconRemove className={styles.icon} />;
			case 'add':
				return <IconAddMark className={styles.icon} />;
			default:
				return <IconRemoveMark className={styles.icon} />;
		}
	};

	render() {
		const { onClick, type, className, text, alignIcon } = this.props;
		return (
			<div className={styles.main}>
				<button onClick={onClick} className={styles.button + ' ' + className}>
					{type && type !== '' && alignIcon && alignIcon.toLowerCase() === 'right' && this.selectIcon(type)}
					{text && text !== '' && <label className={styles.label}>{text}</label>}
					{type && type !== '' && alignIcon && alignIcon.toLowerCase() === 'left' && this.selectIcon(type)}
				</button>
			</div>
		);
	}
}
