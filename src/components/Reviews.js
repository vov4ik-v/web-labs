import React from 'react';
import '../styles/Reviews.css';

const getRandomAvatar = () => {
  const randomGender = Math.random() < 0.5 ? 'male' : 'female';
  const randomQuery = Math.floor(Math.random() * 1000);
  return `https://xsgames.co/randomusers/avatar.php?g=${randomGender}&random=${randomQuery}`;
};

const Reviews = () => {
  return (
      <div className="review-wrapper">
        <h2>
          <span className="underline-light_blue">Our satisfied customers</span>
        </h2>
        <div className="review-div">
          <div className="flex-row">
            <div className="review-item eachdiv col-2">
              <div className="user-details">
                <div className="img-box">
                  <img src={getRandomAvatar()} alt="" />
                </div>
                <div className="det-box">
                  <p className="name">John Smith</p>
                  <p className="designation">Verified Buyer</p>
                </div>
              </div>
              <div className="review-content">
                <h4 className="review-title">Impressive Luxury Sedan</h4>
                <p className="review-text">
                  "I recently purchased a luxury sedan from this dealership, and it has been an absolutely amazing experience. The car's performance and comfort are beyond compare. I'm thoroughly impressed with my purchase and would recommend this store to all car enthusiasts."
                </p>
              </div>
            </div>

            {/* Add more review items here */}
          </div>
        </div>
        <button className="view-more-btn">View more</button>
      </div>
  );
};

export default Reviews;