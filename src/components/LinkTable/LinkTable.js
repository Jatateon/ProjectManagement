import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkTable.module.scss';
import {Link} from 'react-router-dom';
import { IconEdit, IconBack, IconView, IconAddMark, IconRemoveMark, IconUpdate, IconSearch, IconPlus, IconForward, IconRemove} from '../../resources/svg/Icon';

export default class LinkTable extends React.Component {
    static propTypes = {
        to: PropTypes.string,
        value:PropTypes.string,
        icon:PropTypes.string
    };

    selectIcon = (type) => {
		switch (type) {
            case 'back':
                return <IconBack className={styles.icon} />
            case 'view':
                return <IconView className={styles.icon} />
            case 'edit':
                return <IconEdit className={styles.icon} />
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

    render () {
        const {to, icon} = this.props;
        return (
            <div>
                <Link to={to}>{this.selectIcon(icon)}</Link>
            </div>
        );
    }
}