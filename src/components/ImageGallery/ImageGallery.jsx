import { useState, useEffect, useCallback } from 'react';

import Fetch from 'components/ApiService/fetchPixabay';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const getImage = new Fetch();

const ImageGallery = ({ query }) => {
  const [images, setImage] = useState([]);
  const [largeImage, setLargeImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    getImage.pagination = 1;
    try {
      (async () => {
        const { hits } = await getImage.dataFetch(query);
        setImage(hits);
      })();
    } catch (error) {
      alert(new Error('Someting went wrong!'));
    } finally {
      setLoading(false);
    }
  }, [query]);

  const nextPage = useCallback(async () => {
    getImage.pagination += 1;
    try {
      setLoading(true);
      const { hits } = await getImage.dataFetch(query);
      setImage(prevState => [...prevState, ...hits]);
    } catch (error) {
      alert(new Error('Someting went wrong!'));
    } finally {
      setLoading(false);
    }
  }, [query]);

  const onModal = e => {
    if (e.target.nodeName === 'DIV') {
      toogleModal();
    }
  };

  const toogleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const getLargeImage = e => {
    const imgId = Number(e.currentTarget.id);
    const findLargeImage = images.find(el => el.id === imgId);

    setLargeImage(findLargeImage.largeImageURL);
    toogleModal();
  };

  return (
    <>
      {showModal && (
        <Modal
          largeImage={largeImage}
          toogleModal={toogleModal}
          onModal={onModal}
        />
      )}
      <ImageGalleryItem images={images} getLargeImage={getLargeImage} />
      {loading && <Loader />}
      {images.length > 1 && <Button btnNextPage={nextPage} />}
    </>
  );
};

export default ImageGallery;
