import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class Calendar extends React.Component {
    constructor (props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    state = {
        from: null,
        to: null,
    };

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }

    render(){
        const { from, to } = this.state;
        return (
            <div>
                { !from && !to && <p>Выберите <strong>первый день</strong>.</p> }
                { from && !to && <p>Выберите <strong>последний день</strong>.</p> }
                { from && to &&
                <p>
                    В выбрали от { moment(from).format('L') } до { moment(to).format('L') }.
                    { ' ' }<a href="#" onClick={ this.handleResetClick }>Сбросить</a>
                </p>
                }
                <DayPicker fixedWeeks
                           numberOfMonths={ 2 }
                           selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                           onDayClick={ this.handleDayClick }
                />
            </div>
        )
    }

}