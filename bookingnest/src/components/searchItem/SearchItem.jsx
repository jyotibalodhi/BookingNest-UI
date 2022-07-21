import "./searchItem.css";

const SearchItem = () => {
  return (
    <div>

    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?cs=srgb&dl=pexels-photomix-company-97083.jpg&fm=jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Four Season Apartments</h1>
        <span className="siDistance">300m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          1 BHK with Air conditioning
        </span>
        <span className="siFeatures">
          1 BHK • 1 bathroom • 30m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Exceptional</span>
          <button>9.1</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$130</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
    <div className="searchItem">
      <img
        src="https://media.gettyimages.com/photos/render-modern-bedroom-picture-id1161026663?b=1&k=20&m=1161026663&s=170667a&w=0&h=-bjpdzK874X3aPv63xL-wQDB95YbMGP_PbXTIPE1pkc="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hilton Garden Inn</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          1 BHK with Air conditioning
        </span>
        <span className="siFeatures">
          1 BHK • 1 bathroom • 25m² 1 full bed 
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Exceptional</span>
          <button>9.3</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$135</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
    </div>

  );
};

export default SearchItem;