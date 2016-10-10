import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelectFilter } from '../AC/selectFilter'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = value => {
        this.props.changeSelectFilter(value);
    }

    render() {
        const { articles , selected } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.selected
}), { changeSelectFilter })(SelectFilter)