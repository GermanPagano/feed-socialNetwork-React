import React from 'react';
import './BtnPublishStyles.css'

function BtnPublish(props) {
  return (
    <button onClick={props.onClick} className='comment-box-button'>
      Publicar
    </button>
  );
}

export default BtnPublish;
