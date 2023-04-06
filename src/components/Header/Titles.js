import LineCenter from "../Icons/LineCenter";

export default function Titles({ className, content }) {
  return (
    <>
      <div className={className}>
        {content}
        <LineCenter />
      </div>
    </>
  );
}

export const pageTitles = [
  {
    path: "/practies",
    title: <p>Practise Area's</p>,
  },
  {
    path: "/cases",
    title: (
      <p>
        Recent Succesful
        <br /> Cases Results
      </p>
    ),
  },
  {
    path: "/pricing",
    title: <p>Pricing</p>,
  },
  {
    path: "/testimonial",
    title: <p>Testimonials</p>,
  },
  {
    path: "/blog",
    title: <p>Blog</p>,
  },
  {
    path: "/contacts",
    title: <p>Contact Us</p>,
  },
];
