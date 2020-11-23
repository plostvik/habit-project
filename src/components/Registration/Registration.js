import React from 'react';
import styles from './Registration.module.css';

const Registration = function () {
  return (
    <>
      <div className={styles.header}>
        <button type="button">Назад</button>
      </div>
      <form action="submit" className={styles.form}>
        <label htmlFor="userName">Имя</label>
        <input type="text" name="userName" />
        <label htmlFor="userSurname">Фамилия</label>
        <input type="text" name="userSurname" />
        <label htmlFor="userPhone">Номер телефона</label>
        <input type="tel" name="userPhone" placeholder="+380" />
        <input type="submit" value="Дальше" />
      </form>
    </>
  );
};

export default Registration;
