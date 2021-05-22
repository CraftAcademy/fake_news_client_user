import React from 'react';
import { useSelector } from 'react-redux';

const PremiumSection = () => {
  const { articles } = useSelector((state) => state);
  return (
    <div style={styles.container}>
      <p>Me</p>
    </div>
  );
};

export default PremiumSection;

const styles = {
  container: {
    width: '100vw',
    backgroundColor: '#cec269',
    height: 600,
  },
};
