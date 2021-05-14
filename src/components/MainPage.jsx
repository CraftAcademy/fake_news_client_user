import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import Articles from '../modules/Articles';
import ArticleCard from './ArticleCard';
import BreakingNews from './layout/BreakingNews';

const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    Articles.get(setArticles, setErrorMessage)
  }, []);

  let articleList = articles.slice(1).map((article, i) => {
    return <ArticleCard article={article} i={i} />;
  });

  return (
    <>
      {errorMessage && (
        <Header data-cy='error-message' color='red'>
          {errorMessage}
        </Header>
      )}
      <BreakingNews firstArticle={articles[0]} />
      <div id='card-container' data-cy='articles-container'>
        {articleList}
      </div>
    </>
  );
};

export default MainPage;
