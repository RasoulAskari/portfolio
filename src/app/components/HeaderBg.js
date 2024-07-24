import styles from "../styles/Style.module.css";

export default function HeaderBg() {
  return (
    <>
      <div className={`${styles.bgHeader} bg-dark`}></div>
      <div className={`${styles.headerContent} container-fluid `}>
        <div className="row">
          <div className="col-6">
            <div className="content text-center ml-4 pl-4 mt-5">
              <h3 className={`${styles.textJustify} text-info `}>
                Hello! My name is Rasoul Askari, a dedicated Web Developer based
                in Pakistan. I specialize in creating and delivering stunning,
                functional web applications that not only meet but exceed user
                expectations. I am passionate about leveraging my skills and
                experience to contribute to dynamic projects and innovative
                solutions.
              </h3>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <img
              src="/images/rasoul.jpg"
              className={`${styles.img} rounded-circle`}
              alt="My Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
