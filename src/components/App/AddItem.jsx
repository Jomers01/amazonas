import React, { useEffect } from "react";

const AddItem = ({preview}) => {

    useEffect(() => {
        // console.log(preview);
    }, [preview])

    return (
    <div className="cont-add">
      <div className="cont-add-img">
        <div className="cont-add-preview">
          <img className="img-detail" src={(preview.image.length)?(preview.image[0]):"https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_SL1354_.jpg"} alt="..." />
          <img className="img-detail" src={(preview.image.length > 1)?(preview.image[1]):"https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_SL1354_.jpg"} alt="..." />
          <img className="img-detail" src={(preview.image.length > 2)?(preview.image[2]):"https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_SL1354_.jpg"} alt="..." />
          <img className="img-detail" src={(preview.image.length > 3)?(preview.image[3]):"https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_SL1354_.jpg"} alt="..." />
          <img className="img-detail" src={(preview.image.length > 4)?(preview.image[4]):"https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_SL1354_.jpg"} alt="..." />        </div>
        <div className="cont-add-imgPrincipal">
          <img className="img-detail-principal" src={(preview.image.length)?(preview.image[0]):"https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_SL1354_.jpg"} alt="..." />
        </div>
      </div>
      <div className="cont-add-description">
        <h1 className="title-add">{preview.title}</h1>
        <p className="text-add-price">USD ${preview.price}</p>
        <ul>
          <li>{preview.description[0]}</li>
          <li>{preview.description[1]}</li>
          <li>{preview.description[2]}</li>
          <li>{preview.description[3]}</li>
        </ul>
      </div>
    </div>
  );
};

export default AddItem;
