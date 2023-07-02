'use client';

import Form from '@components/recipes/Form';
import React, { useState, FormEvent } from 'react';

function CreateRecipe() {
  const [formData, setFormData] = useState<IRecipe>({
    id: 0,
    title: '',
    ingredients: [],
  });

  const handleForm = (e: FormEvent<HTMLInputElement>): void => {
    const { id, value } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleRecipe = (): void => {};

  return (
    <Form
      handleForm={handleForm}
      formData={formData}
      handleRecipe={handleRecipe}
      type="Create"
    />
  );
}

export default CreateRecipe;
