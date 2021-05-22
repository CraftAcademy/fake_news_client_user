import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PremiumSection = () => {
  const { articles, subscriber } = useSelector((state) => state);

  const premiumList = articles.slice(4.7).map((article) => (
    <Link
      key={article.id}
      to={
        subscriber
          ? `/articles/${article.id}`
          : article.premium
          ? { pathname: '/registration', state: { redirected: true } }
          : `/articles/${article.id}`
      }
      style={styles.articleContainer}>
      <div
        className='background-hover box-shadow'
        style={{
          ...styles.imageContainer,
          background: `linear-gradient(0deg, rgba(33, 33, 33, 0.3), rgba(33, 33, 33, 0.3)), url(${article.image})`,
        }}>
        <h4 style={styles.title}>{article.title}</h4>
      </div>
    </Link>
  ));

  return <div style={styles.container}>{premiumList}</div>;
};

export default PremiumSection;

const styles = {
  container: {
    backgroundColor: '#cec269',
    height: 600,
    display: 'flex',
    alignItems: 'center',
    padding: '0 15%',
  },
  articleContainer: {
    margin: '0 10px',
    height: '80%',
    flex: 1,
  },
  imageContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 10px',
    borderRadius: 3,
    backgroundSize: 'auto 500px',
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Koho',
  },
};
