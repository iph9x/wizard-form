import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Colors, Quality, Shapes, Sizes } from 'src/shared/types';
import { TFormState } from 'src/store/form-slice';

import styles from './forms-array.module.scss';

type TFormsArrayValues = {
  username: string;
  items: TFormState[];
};

const FormsArrayPage: React.VFC = () => {
  const { register, control, handleSubmit } = useForm<TFormsArrayValues>({
    mode: 'onBlur',
    defaultValues: {
      items: [
        {
          name: '',
          price: '',
          shape: null,
          color: null,
          description: '',
          quality: null,
          size: null,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control,
  });

  const onSubmit = (data: TFormsArrayValues) => {
    console.log(data);
  };

  const handleAddItemButtonClick = () => {
    append({
      name: '',
      price: '',
      shape: null,
      color: null,
      description: '',
      quality: null,
      size: null,
    });
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          username:
          <input {...register('username', { required: true })} />
        </label>
        {fields.map((field, index) => (
          <div key={field.id}>
            <label>
              name:
              <input {...register(`items.${index}.name` as const, { required: true })} />
            </label>
            <label>
              price:
              <input {...register(`items.${index}.price` as const, { required: true })} />
            </label>
            <label>
              description:
              <input {...register(`items.${index}.description` as const, { required: true })} />
            </label>
            <label>
              Color:
              <select {...register(`items.${index}.color` as const, { required: true })}>
                {Object.keys(Colors).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Quality:
              <select {...register(`items.${index}.quality` as const, { required: true })}>
                {Object.keys(Quality).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Shape:
              <select {...register(`items.${index}.shape` as const, { required: true })}>
                {Object.keys(Shapes).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Size:
              <select {...register(`items.${index}.size` as const, { required: true })}>
                {Object.keys(Sizes).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" onClick={() => remove(index)}>
              remove item
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddItemButtonClick}>
          add item
        </button>
        <input type="submit" />
      </form>
    </main>
  );
};

export default FormsArrayPage;
