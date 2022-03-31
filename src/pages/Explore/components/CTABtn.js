import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useClickOutside } from "../../../hooks";

export const CTABtn = () => {
  const [dropdown, setDropdown] = useState(false);

  const domNode = useClickOutside(() => setDropdown(false));

  return (
    <div className="menu-btn">
      <BsThreeDotsVertical onClick={() => setDropdown(!dropdown)} />
      {dropdown && (
        <div ref={domNode} className="stacked dropdown">
          <ul>
            <li className="item">Watch Later</li>
            <li className="item">Like Video</li>
          </ul>
        </div>
      )}
    </div>
  );
};
