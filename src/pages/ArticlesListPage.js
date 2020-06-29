import React from 'react'
import articlesContent from './article-content'
import ArticlesList from '../components/ArticlesList'

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articlesContent} />
    </>
  )
}

export default ArticlesListPage