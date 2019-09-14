// Reactのブラウザとアプリ開発で共通したライブラリ
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '東京タワー',
    };
  }

  handelPlaceChange(place) {
    this.setState({ place });
  }

  handelSubmit(e) {
    // リロードの動きをストップ
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }

  render() {
    return (
      <form onSubmit={e => this.handelSubmit(e)}>
        <input
          type="text"
          value={this.state.place}
          onChange={e => this.handelPlaceChange(e.target.value)}
        />
        <input type="submit" value="検索" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
