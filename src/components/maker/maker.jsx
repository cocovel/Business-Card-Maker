import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Jueun",
      company: "The German Marshall Fund of the U.S.",
      theme: "dark",
      title: "Software Engineer",
      email: "jueunsuh@gmail.com",
      message: "Fighting Illini",
      fileName: "jueun",
      fileURL: null
    },
    {
      id: "2",
      name: "Krystal",
      company: "SM Entertainment",
      theme: "light",
      title: "Singer",
      email: "krystal@smentertainment.com",
      message: "F(x)",
      fileName: "Krystal",
      fileURL: "Krystal.png"
    },
    {
      id: "3",
      name: "V",
      company: "BigHit Entertainment",
      theme: "colorful",
      title: "Singer",
      email: "v@bighit.com",
      message: "BTS",
      fileName: "V",
      fileURL: null
    }
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = card => {
    console.log(card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
