import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'src/shared/constants';
import { setStepOne, TFormState } from 'src/store/form-slice';
import { useAppDispatch } from 'src/store/store';

import styles from './step-one.module.scss';

const StepOnePage: React.VFC = () => {
  const { register, handleSubmit, formState } = useForm<Pick<TFormState, 'name' | 'price'>>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const onSubmit = handleSubmit((data) => {
    dispatch(setStepOne(data));
    navigation(ROUTES.stepTwo);
  });

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input {...register('name', { required: true })} />
        </label>
        <label>
          Price:
          <input {...register('price', { required: true })} />
        </label>
        <button type="submit" disabled={!formState.isValid}>
          next
        </button>
      </form>
    </main>
  );
};

export default StepOnePage;
