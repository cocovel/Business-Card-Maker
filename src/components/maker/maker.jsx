import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
