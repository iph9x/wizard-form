import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'src/shared/constants';
import { Quality, Sizes } from 'src/shared/types';
import { setStepThree, TFormState } from 'src/store/form-slice';
import { useAppDispatch } from 'src/store/store';

import styles from './step-three.module.scss';

const StepThreePage: React.VFC = () => {
  const { register, handleSubmit, formState } = useForm<Pick<TFormState, 'quality' | 'size'>>({
    mode: 'onChange',
  });
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data) => {
    dispatch(setStepThree(data));
    navigation(ROUTES.result);
  });

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit}>
        <label>
          Quality:
          <select {...register('quality', { required: true })}>
            {Object.keys(Quality).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          Size:
          <select {...register('size', { required: true })}>
            {Object.keys(Sizes).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={!formState.isValid}>
          Go to result
        </button>
      </form>
    </main>
  );
};

export default StepThreePage;
