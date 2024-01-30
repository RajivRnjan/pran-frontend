import React from "react";
import { Link } from "react-router-dom";
function NotesCard(props) {
  return (
    <>
      <div className="NotesCardItem">
        <Link to={"/pdfViewer/" + props.id}>
          {" "}
          <div >
            <h4 className="">{props.title}</h4>
            <p className="">{props.desc}</p>
            <p>{props.views}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default NotesCard;
