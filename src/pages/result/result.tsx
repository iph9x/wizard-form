import React from 'react';

import { useAppSelector } from 'src/store/store';

import styles from './result.module.scss';

const ResultPage: React.VFC = () => {
  const { formData } = useAppSelector((store) => store);

  return (
    <main className={styles.main}>
      There is your item:
      <p>name: {formData.name}</p>
      <p>price: {formData.price}</p>
      <p>quality: {formData.quality}</p>
      <p>size: {formData.size}</p>
      <p>color: {formData.color}</p>
      <p>shape: {formData.shape}</p>
      <p>description: {formData.description}</p>
    </main>
  );
};

export default ResultPage;
