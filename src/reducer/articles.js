import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToMap } from '../store/helpers'
import { Record } from 'immutable'

const ArticleRecord = Record({id: '', date: '', title: '', text: '', comments: []});

export default (articles = arrayToMap(normalizedArticles, ArticleRecord), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
        case ADD_COMMENT: {
            const { articleId, id } = payload
            const article = articles[articleId]
            console.log(article);
            return { ...articles, [articleId]: article.set('comments', article.comments.concat(id)) }
        }
    }

    return articles
}
