import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToMap } from '../store/helpers'

export default (articles = arrayToMap(normalizedArticles), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
        case ADD_COMMENT: {
            const { articleId, id } = payload
            const article = articles[articleId]
            return Object.assign(articles, {
                [articleId]: {...article, comments: article.comments.concat(id)}
            })
        }
    }

    return articles
}
