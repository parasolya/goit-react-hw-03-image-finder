import { Component } from 'react';
import css from './ImageFinder.module.css';

class Searchbar extends Component {
  state = {
    photoName: '',
  };
  handleInput = (e) => {
    const { value } = e.currentTarget;  
  this.setState({
    photoName: value.toLowerCase(),
  });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.photoName.trim() === '') {
        alert('Введіть назву фото');
        return;
    };
    this.props.onSubmit(this.state.photoName);
    
    this.reset();
  };
  reset = () => {
    this.setState(
        {
            photoName: '',
        }
    )
  };
  render() {
    return (
      <div>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={(e) => {this.handleSubmit(e)}}>
            <button type={css.submit} className={css.SearchForm_button}>
              <span className={css.SearchForm__button_label}>Search</span>
            </button>

            <input
              className={css.SearchForm_input}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              onChange={(e) => {this.handleInput(e)}}
              value={this.state.photoName}
            />
          </form>
        </header>
      </div>
    );
  }
}
export default Searchbar;
