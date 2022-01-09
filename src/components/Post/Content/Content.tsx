import React from "react";

import styles from "./Content.module.scss";

interface Props {
  title: string;
  body: string;
}

const Content: React.FC<Props> = ({ body, title }: Props) => (
  <div className={styles.content}>
    <h1 className={styles.content__title}>{title}</h1>
    <div
      className={styles.content__body}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;
