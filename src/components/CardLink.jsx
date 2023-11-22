import React from "react";
import { Link } from "react-router-dom";

export default function CardLink({ LinkUrl, Icon, CardName }) {
  return (
    <React.Fragment>
      <Link
        target='_blank'
        to={LinkUrl}
        className='card-link'
      >
        {Icon}
        {CardName}
      </Link>
    </React.Fragment>
  );
}
