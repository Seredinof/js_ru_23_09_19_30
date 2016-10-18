import React, { PropTypes } from 'react'

function Comment(props) {

    return (
        <p>
            {props.comment.get('text')} <strong>by {props.comment.get('user')}</strong>
        </p>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default Comment