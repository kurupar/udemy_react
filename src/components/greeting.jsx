// Reactのブラウザとアプリ開発で共通したライブラリ
import React, { PropTypes } from 'react';

function Greeting(props) {
  return (<div>Hi {props.name} </div>);
}

// propsの型指定
Greeting.propTypes = {
  // nameに対し,stringの型指定および必須入力の設定
  name: PropTypes.string.isRequired,
};

export default Greeting;
