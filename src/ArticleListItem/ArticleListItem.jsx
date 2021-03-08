import React from "react";

const ArticleListItem = (props) => {
  return (
    <div>
     <header>
       <h1>{props.title}</h1>
     </header>
     <time dateTime={props.timeStamp}>{props.displayDate}</time>
     <p>{props.shortText}</p>
    </div>
  )
}

export default ArticleListItem;