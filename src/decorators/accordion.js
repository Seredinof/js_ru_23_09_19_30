import React from 'react'

export default function (Component) {
    return class AccordionComponent extends React.Component {
        state = {
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} accordionOpen = {this.accordionOpen}/>
        }

        accordionOpen = id => ev => {
            console.log(id, this.state.openArticleId);
            if(id == this.state.openArticleId) {
                this.setState({
                    openArticleId: null
                })
            } else {
                this.setState({
                    openArticleId: id
                })
            }

        }
    }
}