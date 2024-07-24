import styles from "../styles/Style.module.css";
import Project from "./Project";

export default function Portflio() {
  return (
    <>
      <div className={`${styles.portfolio} Container bg-light`}>
        <div className="row text-center">
          <div className="col-sm-6">
            <Project
              image={"/images/rasoul.jpg"}
              title={"Million Experts"}
              description={
                "A modern single page bookmark extension landing page built with Tailwindcss"
              }
            />
          </div>
          <div className="col-sm-6">
            <Project
              image={"/images/img.png"}
              title={"Million Experts"}
              description={
                "A modern single page bookmark extension landing page built with TailwindcssA modern single page bookmark extension landing page built with Tailwindcss"
              }
            />
          </div>
          <div className="col-sm-6">
            <Project
              image={"/images/rasoul.jpg"}
              title={"Million Experts"}
              description={
                "A modern single page bookmark extension landing page built with Tailwindcss"
              }
            />
          </div>
          <div className="col-sm-6">
            <Project
              image={"/images/rasoul.jpg"}
              title={"Million Experts"}
              description={
                "A modern single page bookmark extension landing page built with Tailwindcss"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
