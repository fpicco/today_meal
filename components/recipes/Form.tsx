import React, { ChangeEvent } from 'react';

type Props = {
  handleSubmit: (e: React.FormEvent, formData: IRecipe) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: IRecipe;
  type: string;
};

function Form({ handleSubmit, formData, handleChange, type }: Props) {
  return (
    <form aria-label='form' onSubmit={(e) => handleSubmit(e, formData)}>
      <div>
        <label htmlFor='title'>
          Title
          <input
            onChange={handleChange}
            type='text'
            id='title'
            className='form_input'
          />
        </label>

        <label htmlFor='ingredients'>
          Ingredients
          <input
            onChange={handleChange}
            type='text'
            id='ingredients'
            className='form_input'
          />
        </label>
      </div>
      <div className='flex w-full justify-end'>
        <button
          type='submit'
          className='black_btn mt-4'
          disabled={formData.title === '' || formData.ingredients.length === 0}
        >
          {type} recipe
        </button>
      </div>
    </form>
  );
}

export default Form;
