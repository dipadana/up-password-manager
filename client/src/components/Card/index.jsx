import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./card.scss";

export default function Card(props) {
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState(props.url);

  function handleErrorImage() {
    setImageUrl("kuncijayaresidence.com");
  }

  // function setImage() {
  //   setImageUrl(`//logo.clearbit.com/${props.url}`);
  // }

  function goToEdit() {
    history.push(`/editPassword/${props._id}`);
  }

  return (
    <div data-testid="card" onClick={goToEdit} className="password-card">
      <div className="row">
        <div className="col-4">
          <div
            data-testid="card-img"
            className="password-card--image-container"
          >
            <img
              src={`//logo.clearbit.com/${imageUrl}`}
              onError={(e) => handleErrorImage(this)}
              alt="website logo"
            />
          </div>
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-end">
            <div className="img">
              <span>
                <img
                  data-testid="card-edit-btn"
                  src="https://image.flaticon.com/icons/svg/636/636823.svg"
                  width="26"
                  height="26"
                  alt="edit button"
                />
              </span>
            </div>
          </div>
          <p data-testid="card-url" className="password-card--url-text">
            {" "}
            {props.url}{" "}
          </p>
          <p data-testid="card-username" className="password-card--email-text">
            {" "}
            {props.nameData}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
