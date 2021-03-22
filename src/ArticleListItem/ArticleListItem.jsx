import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [buttonText, setButtonText] = useState("Show more");

  const onClick = () => {
    setShowInfo(!showInfo);
    if(!showInfo) {
      setButtonText("Show less");
    } else {
      setButtonText("Show more");
    }
  };

  return (
      <li className={styles.item}>
        <article className={styles.article}>
          <h2 className={styles.title}>{props.article.title}</h2>
          {showInfo &&
            <div>
              <p>{props.article.shortText}</p>
              <time className={styles.dateTime} dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
            </div>
          }
        </article>
        <ArticleTextToggleButton onClick={onClick} buttonText={buttonText}/>
      </li>
    );
  };

  ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
  };

  export default ArticleListItem;