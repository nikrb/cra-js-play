import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Card = () => (
  <div className={css(styles.container)}>
    <img src={encodeURI("//via.placeholder.com/350x150?No Image")}/>
    <div className={css(styles.title)}>
      some title
    </div>
    <p className={css(styles.content)} >
      we need quite a length description to make sure all the text fits inside
      the box we using to enclose the detail for the card
    </p>
  </div>
);

const styles = StyleSheet.create({
  container: {
    background: '#fefff9',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0 0 8px 0',
    borderRadius: '4px',
    color: '#363636',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    width: '320px'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    margin: '0',
    padding: '1rem',
    lineHeight: '1.2',
    background: 'rgba(157, 187, 63, .85)',
    color: 'white',
    bottom: '0'
  },
  title_heading: {
    margin: '0',
    padding: '0 3.5%',
    lineHeight: '1.2'
  },
  content: {
    padding: '5% 5% 3% 5%'
  }
});

export default Card;
