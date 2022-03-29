import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

export const CTABtn = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <BsThreeDotsVertical onClick={() => setDropdown(!dropdown)} />
      {dropdown && (
        <div className="stacked dropdown">
          <ul>
            <li className="item">Watch Later</li>
            <li className="item">Like Video</li>
          </ul>
        </div>
      )}
    </div>
  );
};
