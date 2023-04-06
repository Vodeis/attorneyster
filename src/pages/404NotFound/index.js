import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <>
      <main className="wrapper">
        <section>
          <div className={styles.bg}>
            <div className={styles.container + " container"}>
              <h1>404</h1>
              <svg
                width="95"
                height="44"
                viewBox="0 0 95 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="26.5" x2="95" y2="26.5" stroke="#D1B06B" />
                <line y1="16.5" x2="95" y2="16.5" stroke="#D1B06B" />
                <line
                  x1="52.5"
                  y1="44"
                  x2="52.5"
                  y2="2.18557e-08"
                  stroke="#D1B06B"
                />
                <line
                  x1="42.5"
                  y1="44"
                  x2="42.5"
                  y2="2.18557e-08"
                  stroke="#D1B06B"
                />
                <rect x="44" y="18" width="7" height="7" fill="#D1B06B" />
              </svg>
              <h2>Page Not Found</h2>
              <p>
                The page you are looking for doesn't exist or has been moved.
              </p>
              <Link to="/">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
