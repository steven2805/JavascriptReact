import React from 'react';
import ReactDOM from 'react-dom';
import CommentContainer from './container/movieContainer'
window.onload = function(){
  ReactDOM.render(
    <CommentContainer />,
    document.getElementById('app')
  );
}
