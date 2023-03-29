import * as React from 'react';
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
class CardForm extends React.Component<CardFormProps, CardFormState> {
  private titleRef = React.createRef<HTMLInputElement>();
  private descriptionRef = React.createRef<HTMLInputElement>();
  private releaseDateRef = React.createRef<HTMLInputElement>();
  private notRobotRef = React.createRef<HTMLInputElement>();
  private genreRef = React.createRef<HTMLSelectElement>();
  private viewedRef = React.createRef<HTMLInputElement>();
  private imageRef = React.createRef<HTMLInputElement>();

  constructor(props: CardFormProps) {
    super(props);
    this.state = {
      errors: {},
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { onSubmit } = this.props;
    const title = this.titleRef.current;
    const description = this.descriptionRef.current;
    const releaseDate = this.releaseDateRef.current;
    const genre = this.genreRef.current;
    const notRobot = this.notRobotRef.current;
    const viewed = this.viewedRef.current;
    const imageFile = this.imageRef.current?.files?.[0];
    const errors: { [key: string]: string | undefined } = {};

    if (!title?.value) {
      errors['title'] = 'Please enter a title';
    }
    if (!description?.value) {
      errors['description'] = 'Please enter a description';
    }
    if (!releaseDate?.value) {
      errors['releaseDate'] = 'Please enter a release date';
    }
    if (!genre?.value) {
      errors['genre'] = 'Please select a genre';
    }
    if (notRobot === null || !notRobot.checked) {
      errors['notRobot'] = 'Note that you are not a robot';
    }
    if (!imageFile) {
      errors['imageFile'] = 'Please add an image';
    }
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    if (Object.keys(errors).length < 1) {
      this.setState({
        errors: {
          title: '',
          description: '',
          notRobot: '',
          genre: '',
          releaseDate: '',
          imageFile: '',
        },
      });
    }

    // Если ошибок нет, отправляем данные формы.
    onSubmit({
      title: title?.value ?? '',
      description: description?.value ?? '',
      releaseDate: releaseDate?.value ?? '',
      genre: genre?.value ?? '',
      notRobot: notRobot?.checked ? true : false,
      viewed: viewed?.checked ? true : false,
      image: imageFile,
    });
    this.setState({ message: 'Card successfully added!' }, () => {
      setTimeout(() => {
        this.setState({ message: '' });
      }, 3000);
    });

    if (
      this.titleRef.current !== null &&
      this.descriptionRef.current !== null &&
      this.releaseDateRef.current !== null &&
      this.releaseDateRef.current !== null &&
      this.genreRef.current !== null &&
      this.notRobotRef.current !== null &&
      this.viewedRef.current !== null &&
      this.imageRef.current !== null
    ) {
      this.titleRef.current.value = '';
      this.descriptionRef.current.value = '';
      this.releaseDateRef.current.value = '';
      this.genreRef.current.value = '';
      this.notRobotRef.current.checked = false;
      this.viewedRef.current.checked = false;
      this.imageRef.current.value = '';
    }
  }

  render() {
    const { errors, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <MyInput
          spanName={'Title:'}
          type={'text'}
          name={'title'}
          inputRef={this.titleRef}
          error={errors['title']}
        />
        <br />
        <MyInput
          spanName={'Short description:'}
          type={'text'}
          name={'description'}
          inputRef={this.descriptionRef}
          error={errors['description']}
        />
        <br />
        <MyInput
          spanName={'Release date:'}
          type={'date'}
          name={'releaseDate'}
          inputRef={this.releaseDateRef}
          error={errors['releaseDate']}
        />
        <br />
        <MySelect genreRef={this.genreRef} error={errors['genre']} />
        <br />
        <MyCheckbox
          spanName="I am not a robot"
          type={'checkbox'}
          name={'notRobot'}
          inputRef={this.notRobotRef}
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
              inputRef={this.viewedRef}
              error={errors['viewed']}
              isChecked={true}
            />
            <br />
            <MyRadio
              type={'radio'}
              name={'Viewed'}
              value={'no'}
              inputRef={this.viewedRef}
              error={errors['viewed']}
            />
          </div>
        </div>
        <br />
        <MyInputFile
          spanName="Upload image"
          type="file"
          name="image"
          imageRef={this.imageRef}
          error={errors['imageFile']}
        />
        <button type="submit" className="form_btn">
          Add new Card
        </button>
        {message && <div className="message">{message.toUpperCase()}</div>}
      </form>
    );
  }
}

export default CardForm;
