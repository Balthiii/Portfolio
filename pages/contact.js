import React, { useState } from 'react';
import styles from "@/styles/Contentcontact.module.css";
import Head from 'next/head';
import Navbar from '../components/navbar'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

  };

  return (
    <div className={styles.container}>
      <Head>
        <title>À propos de moi</title>
        <meta name="description" content="Ceci est ma page À propos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Contactez-Nous</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
  <label className={styles.label}>
    Nom:
    <input type="text" name="name" onChange={handleChange} className={styles.inputText} />
  </label>
  <label className={styles.label}>
    Email:
    <input type="email" name="email" onChange={handleChange} className={styles.inputEmail} />
  </label>
  <label className={styles.label}>
    Message:
    <textarea name="message" onChange={handleChange} className={styles.textarea} />
  </label>
  <input type="submit" value="Envoyer" className={styles.submitButton} />
</form>
      </main>
    </div>
  );
}