import React, { Component, PropTypes } from 'react'
import DatePicker from './DatePicker'
import SelectFilter from './SelectFilter'

class Filters extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <DatePicker />
                <SelectFilter />
            </div>
        )
    }
}

export default Filters