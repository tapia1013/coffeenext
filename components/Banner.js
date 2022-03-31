import styles from './banner.module.css';

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title1}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button onClick={props.handleOnClick} className={styles.button}>{props.buttonText}</button>
    </div>
  )
}

export default Banner