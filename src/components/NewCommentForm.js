import React, { Component, PropTypes } from 'react'

export default class NewCommentForm extends Component {

    state = {
        name: '',
        message: ''
    }

    handleChangeName = ev => {
        this.setState ({
            name: ev.target.value
        })
    }

    handleChangeMessage = ev => {
        this.setState ({
            message: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault();
        console.log(`${this.state.message} by ${this.state.name}`);
    }

    render () {
        return (

            <form style={{marginTop: '20px'}} onSubmit={this.handleSubmit}>
                Имя: <input style={{display: 'block', width: '200px', marginBottom: '10px'}} type="text" value={this.state.name} onChange={this.handleChangeName}/>
                Сообщение: <input style={{display: 'block', width: '200px', marginBottom: '10px'}} type="text" value={this.state.message} onChange={this.handleChangeMessage}/>
                <button>Отправить</button>
            </form>
        )
    }
}