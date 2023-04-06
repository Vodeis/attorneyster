import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Blog.module.scss";
import Image from "../Image";
import examination from "../../images/blog/Examination.png";
import thePeaceInTheStates from "../../images/blog/ThePeaceInTheStates.png";

import failingToCarryOut from "../../images/blog/FailingToCarryOut.png";
import howLegalProfessionalsWork from "../../images/blog/HowLegalProfessionalsWork.png";
import ridingSolo from "../../images/blog/RidingSolo.png";
import caseFiledOnBehalf from "../../images/blog/CaseFiledOnBehalf.png";
import chooseLegalRepresentation from "../../images/blog/ChooseLegalRepresentation.png";

export default function Blog() {
  const posts = [
    {
      id: 1,
      imageUrl: thePeaceInTheStates,
      theme: "Legal Advice",
      date: "Sunday, July 24, 2022",
      title: "Prevent A Further Breach of The Peace In The States",
      text: "There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don't look even slightly believable.",
      route: "/blog/ThePeaceInTheStates",
      linkText: "Read More",
    },
    {
      id: 2,
      imageUrl: failingToCarryOut,
      theme: "Legal Advice",
      date: "Sunday, July 24, 2022",
      title: "Failing to Carry Out The Terms of A Business Contract",
      text: "There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don't look even slightly believable.",
      route: "/blog/FailingToCarryOut",
      linkText: "Read More",
    },
    {
      id: 3,
      imageUrl: howLegalProfessionalsWork,
      theme: "Legal Advice",
      date: "Sunday, July 24, 2022",
      title: "How Legal Professionals Work: The Defense Objects",
      text: "There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don't look even slightly believable.",
      route: "/blog/HowLegalProfessionalsWork",
      linkText: "Read More",
    },
    {
      id: 4,
      imageUrl: ridingSolo,
      theme: "Legal Advice",
      date: "Sunday, July 24, 2022",
      title: "Riding solo to the rescue of her beloved nonprofits",
      text: "There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don't look even slightly believable.",
      route: "/blog/RidingSolo",
      linkText: "Read More",
    },
    {
      id: 5,
      imageUrl: caseFiledOnBehalf,
      theme: "Legal Advice",
      date: "Sunday, July 24, 2022",
      title: "Case Filed on Behalf of Injured Tugboat Worker",
      text: "There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don't look even slightly believable.",
      route: "/blog/CaseFiledOnBehalf",
      linkText: "Read More",
    },
    {
      id: 6,
      imageUrl: chooseLegalRepresentation,
      theme: "Legal Advice",
      date: "Sunday, July 24, 2022",
      title: "How Companies Choose Legal Representation",
      text: "There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don't look even slightly believable.",
      route: "/blog/ChooseLegalRepresentation",
      linkText: "Read More",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <div className={classNames(styles.top, styles.post)}>
            <Image src={examination} width={600} height={400} />
            <div>
              <p>
                Criminal Law, Kidnapping<span>|</span>Sunday, July 24, 2022
              </p>
              <h2>An Independent Examination Of Charity Accounts</h2>
              <p>
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>
              <Link to="/blog/ExaminationOfCharity">Read More</Link>
            </div>
          </div>
          <ul className={styles.postsContainer}>
            {posts.map((post) => {
              return (
                <li key={post.id} className={styles.post}>
                  <Image src={post.imageUrl} width={384} height={304} />
                  <div>
                    <p>
                      {post.theme}
                      <span>|</span>
                      {post.date}
                    </p>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                    <Link to={post.route}>{post.linkText}</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
