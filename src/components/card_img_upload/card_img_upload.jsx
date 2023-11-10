import React, { useRef } from "react";
import styles from "./card_img_upload.module.css";


const CardImgUpload = ({profileImg}) => {

  const {
    fileURL
  } = profileImg;

  const url = fileURL || Nofile;
  return (
    <li className={`${styles.profileImg} ${getStyles(photo)}`}>

    </li>
  );

  function getStyles(photo){
    
  } 


  return();
};


export default CardImgUpload;