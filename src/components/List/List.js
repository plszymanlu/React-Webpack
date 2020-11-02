import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        img: PropTypes.string,
        colTitle1: PropTypes.string,
        colTitle2: PropTypes.string,
        colTitle3: PropTypes.string,
    };

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    };

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} imgSrc={this.props.img} />
                <div className={styles.description}>{this.props.children}</div>
                <div className={styles.columns}>
                    <Column columnTitle={this.props.colTitle1} />
                    <Column columnTitle={this.props.colTitle2} />
                    <Column columnTitle={this.props.colTitle3} />
                </div>
            </section>
        );
    }
}

export default List;