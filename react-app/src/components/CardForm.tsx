import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { MyCheckbox } from './UI/input/MyCheckbox';
import { MyInput } from './UI/input/MyInput';
import { MyInputFile } from './UI/input/MyInputFile';
import { MyRadio } from './UI/input/MyRadio';
import { MySelect } from './UI/input/MySelect';

export type CardFormFields = {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  notRobot?: boolean;
  viewed?: boolean;
  image?: FileList;
  imageUrl: string | undefined;
};

interface CardFormProps {
  onSubmit: (data: CardFormFields) => void;
}

interface CardFormState {
  message: string;
}

const TIMEOUT = 3000;

const CardForm = ({ onSubmit }: CardFormProps) => {
  const [message, setMessage] = useState<CardFormState['message']>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CardFormFields>({
    mode: 'onSubmit',
  });

  const handleFormSubmit: SubmitHandler<CardFormFields> = async (data) => {
    const { image, ...formData } = data;
    const imageUrl = image ? URL.createObjectURL(image[0]) : undefined;
    onSubmit({ ...formData, imageUrl });
    setMessage('Card successfully added!');
    setTimeout(() => {
      setMessage('');
    }, TIMEOUT);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <MyInput
        spanName={'Title:'}
        type={'text'}
        name={'title'}
        inputRef={register('title', { required: 'Please enter a title' })}
        error={errors['title']?.message}
      />
      <br />
      <MyInput
        spanName={'Short description:'}
        type={'text'}
        name={'description'}
        inputRef={register('description', { required: 'Please enter a description' })}
        error={errors['description']?.message}
      />
      <br />
      <MyInput
        spanName={'Release date:'}
        type={'date'}
        name={'releaseDate'}
        inputRef={register('releaseDate', { required: 'Please enter a release date' })}
        error={errors['releaseDate']?.message}
      />
      <br />
      <MySelect
        name={'genre'}
        genreRef={register('genre', { required: 'Please select a genre' })}
        error={errors['genre']?.message}
      />
      <br />
      <MyCheckbox
        spanName="I am not a robot"
        type={'checkbox'}
        name={'notRobot'}
        inputRef={register('notRobot', { required: 'Note that you are not a robot' })}
        error={errors['notRobot']?.message}
      />
      <br />
      <div className="view">
        <span className="view-span">Viewed:</span>
        <div className="view-vars">
          <span>Yes</span>
          <br />
          <span>No</span>
        </div>
        <div className="view-radio">
          <MyRadio
            type={'radio'}
            name={'viewed'}
            value={'yes'}
            inputRef={register('viewed', { required: 'Please select "Yes" or "No"' })}
            error={errors['viewed']?.message}
            isChecked={false}
          />
          <br />
          <MyRadio
            type={'radio'}
            name={'viewed'}
            value={'no'}
            inputRef={register('viewed', { required: 'Please select "Yes" or "No"' })}
            error={errors['viewed']?.message}
            isChecked={false}
          />
        </div>
      </div>
      <br />
      <MyInputFile
        spanName="Upload image"
        type="file"
        name="image"
        imageRef={register('image', { required: 'Please upload an image' })}
        error={errors['image']?.message}
      />
      <button type="submit" className="form_btn">
        Add new Card
      </button>
      {message && <div className="message">{message.toUpperCase()}</div>}
    </form>
  );
};

export default CardForm;
