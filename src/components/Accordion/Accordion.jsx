import React, { useState } from "react";

import PropTypes from 'prop-types';
import classNames from 'classnames';

import "./Accordion.scss";

export const Accordion = (props) => {

  const {
    shouldOpen,
    title,
    children,
  } = props;

  const [collapse, setCollapse] = useState(shouldOpen);

  return (
    <div className="accordion">
      <div
        className="accordion__header"
      >
        <div
          className="accordion__title"
          onClick={() => setCollapse(!collapse)}
        >
          <img
            src={collapse ? "/expand_less.svg" : "/expand_more.svg"}
            alt="expand__icon"
          />
          <div className="accordion__title">{title}</div>
        </div>
      </div>
      <div className={classNames('accordion__body', collapse && "accordion__show")}>
        {children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  shouldOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
};
