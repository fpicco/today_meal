import { fireEvent, render, screen } from '@testing-library/react';
import { ChangeEvent } from 'react';
import Form from '../../../components/recipes/Form';

describe('Form', () => {
  test('handles form submission', () => {
    const handleSubmitMock = jest.fn();
    const handleChangeMock = jest.fn();

    const formDataMock = {
      id: 9,
      title: 'Arroz con pollo',
      ingredients: ['pollo', 'arroz'],
    };

    render(
      <Form
        handleSubmit={handleSubmitMock}
        handleChange={handleChangeMock}
        formData={formDataMock}
        type="Create"
      />
    );

    const titleInput = screen.getByLabelText('Title');
    fireEvent.change(titleInput, { target: { value: 'Arroz con pollo' } });

    const ingredientsInput = screen.getByLabelText('Ingredients');
    fireEvent.change(ingredientsInput, { target: { value: 'pollo, arroz' } });

    const formElement = screen.getByRole('form');
    fireEvent.submit(formElement);

    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    expect(handleSubmitMock).toHaveBeenCalledWith(expect.anything(), formDataMock);
    expect(handleChangeMock).toHaveBeenCalledTimes(2);
  });
});
