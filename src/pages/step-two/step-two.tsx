import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'src/shared/constants';
import { Colors, Shapes } from 'src/shared/types';
import { setStepTwo, TFormState } from 'src/store/form-slice';
import { useAppDispatch } from 'src/store/store';

import styles from './step-two.module.scss';

const StepTwoPage: React.VFC = () => {
  const { register, handleSubmit, formState } = useForm<Pick<TFormState, 'shape' | 'description' | 'color'>>({
    mode: 'onChange',
  });
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data) => {
    dispatch(setStepTwo(data));
    navigation(ROUTES.stepThree);
  });

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit}>
        <label>
          Shape:
          <select {...register('shape', { required: true })}>
            {Object.keys(Shapes).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description:
          <input {...register('description', { required: true })} />
        </label>
        <label>
          Color:
          <select {...register('color', { required: true })}>
            {Object.keys(Colors).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={!formState.isValid}>
          next
        </button>
      </form>
    </main>
  );
};

export default StepTwoPage;
