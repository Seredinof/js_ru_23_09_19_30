import React, { Component, PropTypes } from 'react'
import SelectFilter from './SelectFilter'
import 'react-select/dist/react-select.css'
import Calendar from './Calendar'

class Filters extends Component {

    render() {

        return (
            <div>
                <Calendar />
                <SelectFilter articles = {this.props.articles}/>
            </div>
        )
    }
}

export default Filters