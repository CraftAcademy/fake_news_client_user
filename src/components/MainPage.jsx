import React, { useEffect } from 'react';
import Articles from '../modules/Articles';
import ArticleCard from './ArticleCard';
import BreakingNews from './layout/BreakingNews';
import { useSelector } from 'react-redux';
import CategoryMenu from './layout/CategoryMenu';
import CustomDivider from './CustomDivider';
import PremiumSection from './PremiumSection';

const MainPage = () => {
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    Articles.index();
  }, []);

  let articleList = articles.slice(1, 4).map((article, index) => {
    return <ArticleCard article={article} index={index} key={index} />;
  });

  return (
    <>
      <CategoryMenu />
      <BreakingNews firstArticle={articles[0]} />
      <CustomDivider title='New Top Conspiracies' />
      <div id='articles-container' data-cy='articles-container'>
        {articleList}
      </div>
      <CustomDivider title='Premium Articles' />
      <PremiumSection />
    </>
  );
};

export default MainPage;
