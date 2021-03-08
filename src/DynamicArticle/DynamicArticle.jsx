import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";


const DynamicArticle = (props) => {
  let {url} = useRouteMatch();
  return (
    <div>
      <header>
       <Link to={props.url}>Back</Link>
        <h1>{props.article.title}</h1>
        <address>
          by {props.article.author} (
          <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} />
    </div>
  );
};

export default DynamicArticle;