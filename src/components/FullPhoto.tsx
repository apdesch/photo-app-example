import React, { MouseEventHandler } from "react";
import type { Urls } from "./PhotoList";

export interface Photo {
  id: string;
  color: string;
  urls: Urls;
  alt_description: string;
}

export interface FullPhotoProps {
  photo: Photo;
  close: MouseEventHandler;
}

const FullPhoto: React.FC<FullPhotoProps> = ({
  photo: { id, color, urls, alt_description },
  close,
}) => (
  <div className="full" style={{ background: color }}>
    <div className="close" onClick={close} role="button">
      &times;
    </div>
    <img src={urls.regular} alt={alt_description || id} />
  </div>
);

export default FullPhoto;
