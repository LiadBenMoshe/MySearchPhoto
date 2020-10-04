import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const pics = props.images.map((pic) => {
    return <ImageCard key={pic.id} image={pic} />;
  });
  return <div className="image-list">{pics}</div>;
};

export default ImageList;
