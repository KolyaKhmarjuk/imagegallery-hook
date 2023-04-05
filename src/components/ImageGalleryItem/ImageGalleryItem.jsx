import React from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, getLargeImage }) => {
  return (
    <ul className={s.list}>
      {images.map(({ id, webformatURL }) => (
        <li key={id} id={id} onClick={getLargeImage} className={s.item}>
          <img className={s.item_img} src={webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGalleryItem;
