import React, { useState, useRef } from 'react';

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
  image?: File;
};

interface CardFormProps {
  onSubmit: (data: CardFormFields) => void;
}

interface CardFormState {
  errors: {
    [key: string]: string | undefined;
  };
  message: string;
}

const TIMEOUT = 3000;

const CardForm = ({ onSubmit }: CardFormProps) => {
  const [errors, setErrors] = useState<CardFormState['errors']>({});
  const [message, setMessage] = useState<CardFormState['message']>('');
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);
  const notRobotRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  const viewedRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const releaseDate = releaseDateRef.current?.value;
    const genre = genreRef.current?.value;
    const notRobot = notRobotRef.current?.checked;
    const viewed = viewedRef.current?.checked;
    const imageFile = imageRef.current?.files?.[0];
    const errors: { [key: string]: string | undefined } = {};

    if (!title) {
      errors.title = 'Please enter a title';
    }
    if (!description) {
      errors.description = 'Please enter a description';
    }
    if (!releaseDate) {
      errors.releaseDate = 'Please enter a release date';
    }
    if (!genre) {
      errors.genre = 'Please select a genre';
    }
    if (notRobot === null || !notRobot) {
      errors.notRobot = 'Note that you are not a robot';
    }
    if (!imageFile) {
      errors.imageFile = 'Please add an image';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    if (Object.keys(errors).length < 1) {
      setErrors({
        title: '',
        description: '',
        notRobot: '',
        genre: '',
        releaseDate: '',
        imageFile: '',
      });
    }

    // Если ошибок нет, отправляем данные формы.
    onSubmit({
      title: title || '',
      description: description || '',
      releaseDate: releaseDate || '',
      genre: genre || '',
      notRobot: notRobot ? true : false,
      viewed: viewed ? true : false,
      image: imageFile,
    });
    setMessage('Card successfully added!');
    setTimeout(() => {
      setMessage('');
    }, TIMEOUT);

    if (
      titleRef.current !== null &&
      descriptionRef.current !== null &&
      releaseDateRef.current !== null &&
      releaseDateRef.current !== null &&
      genreRef.current !== null &&
      notRobotRef.current !== null &&
      viewedRef.current !== null &&
      imageRef.current !== null
    ) {
      titleRef.current.value = '';
      descriptionRef.current.value = '';
      releaseDateRef.current.value = '';
      genreRef.current.value = '';
      notRobotRef.current.checked = false;
      viewedRef.current.checked = false;
      imageRef.current.value = '';
    }
  };

  // const { errors, message } = this.state;
  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        spanName={'Title:'}
        type={'text'}
        name={'title'}
        inputRef={titleRef}
        error={errors['title']}
      />
      <br />
      <MyInput
        spanName={'Short description:'}
        type={'text'}
        name={'description'}
        inputRef={descriptionRef}
        error={errors['description']}
      />
      <br />
      <MyInput
        spanName={'Release date:'}
        type={'date'}
        name={'releaseDate'}
        inputRef={releaseDateRef}
        error={errors['releaseDate']}
      />
      <br />
      <MySelect genreRef={genreRef} error={errors['genre']} />
      <br />
      <MyCheckbox
        spanName="I am not a robot"
        type={'checkbox'}
        name={'notRobot'}
        inputRef={notRobotRef}
        error={errors['notRobot']}
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
            name={'Viewed'}
            value={'yes'}
            inputRef={viewedRef}
            error={errors['viewed']}
            isChecked={true}
          />
          <br />
          <MyRadio
            type={'radio'}
            name={'Viewed'}
            value={'no'}
            inputRef={viewedRef}
            error={errors['viewed']}
          />
        </div>
      </div>
      <br />
      <MyInputFile
        spanName="Upload image"
        type="file"
        name="image"
        imageRef={imageRef}
        error={errors['imageFile']}
      />
      <button type="submit" className="form_btn">
        Add new Card
      </button>
      {message && <div className="message">{message.toUpperCase()}</div>}
    </form>
  );
};

export default CardForm;
