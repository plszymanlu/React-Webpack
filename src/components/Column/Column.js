import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        cards: PropTypes.array,
        name: PropTypes.node,
        icon: PropTypes.string,
        addCard: PropTypes.func,
    };

    static defaultProps = {
        icon: settings.defaultColumnIcon,
    }

    render() {
        const { title, icon, cards, addCard } = this.props;
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                    {title}
                </h3>

                <div className={styles.cards}>
                    {cards.map((cardData) => (
                        <Card key={cardData.id} {...cardData} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={addCard} />
                </div>
            </section>
        );
    }
}

export default Column;