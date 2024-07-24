import styles from "../styles/Style.module.css";

export default function Project({ image, title, description }) {
  return (
    <>
      <div className="cardContainer rounded">
        <img src={`${image}`} className={`${styles.projectImg} rounded`} />
        <h3 className="text-start fw-bold mt-3">{title} </h3>
        <p className={`${styles.textJustify} rounded`}>{description} </p>
      </div>
    </>
  );
}
