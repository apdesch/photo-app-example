import React, { PureComponent } from "react";
import type { Photo } from "./FullPhoto";
import uniq from "../utils/uniq";
import classNames from "../utils/classnames";

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface PhotoListProps {
  photos: Photo[];
  urls?: Urls;
  open: Function;
}

class PhotoList extends PureComponent<PhotoListProps> {
  render() {
    const { photos, open } = this.props;
    return (
      <div className="photos">
        {uniq(photos).map((photo: Photo) => {
          const { id, urls, alt_description, color } = photo;
          const classnames = classNames({
            frame: true,
            ready: !!color,
          });
          return (
            <div
              key={id}
              className={classnames}
              style={{ background: color }}
              onClick={() => open(photo)}
              role="button"
            >
              <img
                src={urls.small}
                alt={alt_description || id}
                decoding="async"
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default PhotoList;
