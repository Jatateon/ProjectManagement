import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { IconEdit, IconAddMark, IconRemoveMark, IconUpdate, IconSearch, IconPlus, IconForward, IconRemove} from '../../resources/svg/Icon';

export default class Button extends React.Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
        label: PropTypes.string,
        over: PropTypes.bool,
	};

	selectIcon = (type) => {
        const {over} = this.props;
		switch (type) {
            case 'edit':
                return <IconEdit className={ over ? styles.icon_selected : styles.icon} />
            case 'update':
                return <IconUpdate className={styles.icon}/>
            case 'search':
                return <IconSearch className={styles.icon}/>
            case 'plus':
                return <IconPlus className={styles.icon}/>
            case 'forward':
                return <IconForward className={styles.icon}/>
            case 'remove':
                return <IconRemove className={styles.icon}/>
			case 'add':
				return <IconAddMark className={styles.icon} />;
			default:
				return <IconRemoveMark className={styles.icon} />;
		}
	};

	render() {
		const { onClick, type, className } = this.props;
		return (
			<div className={styles.main}>
				<button onClick={onClick} className={styles.button + ' ' + className}>
					{this.selectIcon(type)}
				</button>
			</div>
		);
	}
}
