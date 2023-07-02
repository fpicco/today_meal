'use client';

import Form from '@components/recipes/Form';
import React, { useState, FormEvent } from 'react';

function CreateRecipe() {
  const [formData, setFormData] = useState<IRecipe>({
    id: 0,
    title: '',
    ingredients: [],
  });

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const { id, value } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (): void => {};

  return (
    <Form
      handleChange={handleChange}
      formData={formData}
      handleSubmit={handleSubmit}
      type="Create"
    />
  );
}

export default CreateRecipe;
