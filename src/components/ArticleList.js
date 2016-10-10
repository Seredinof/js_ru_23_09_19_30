import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };

    render() {
        const { articles, toggleItem, isItemOpen, selected, range } = this.props

        let articleComponents;
        let filterArticles = articles;
        //лучше всю эту логико по фильтрации оставить в коннекте
        if(selected != undefined && selected.length) {

            filterArticles = filterArticles.filter(function(article) {
                return selected.some(function(item){
                    return item.value == article.id
                })
            });
        }

        //console.log(range)
        const {from, to} = range;
        
        if(from && to) {
            filterArticles = filterArticles.filter(article => {
                const article_date = Date.parse(article.date);
                return article_date > Date.parse(from) && article_date < Date.parse(to);
            })
        }

        articleComponents = filterArticles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
            </li>))


        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.selected,
    range: state.range
}))(accordion(ArticleList))
