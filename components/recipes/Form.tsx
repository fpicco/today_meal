import React, { ChangeEvent } from 'react';

type Props = {
  handleRecipe: (e: React.FormEvent, formData: IRecipe) => void;
  handleForm: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: IRecipe;
  type: string;
};

function Form({
  handleRecipe, formData, handleForm, type,
}: Props) {
  return (
    <form onSubmit={(e) => handleRecipe(e, formData)}>
      <div>
        <label htmlFor="title">
          Title
          <input
            onChange={handleForm}
            type="text"
            id="title"
            className="form_input"
          />
        </label>

        <label htmlFor="ingredients">
          Ingredients
          <input
            onChange={handleForm}
            type="text"
            id="ingredients"
            className="form_input"
          />
        </label>
      </div>
      <div className="flex w-full justify-end">
        <button
          type="submit"
          className="black_btn mt-4"
          disabled={formData.title === '' || formData.ingredients.length === 0}
        >
          {type}
          {' '}
          {' '}
          recipe
        </button>
      </div>
    </form>
  );
}

export default Form;
