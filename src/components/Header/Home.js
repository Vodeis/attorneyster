import LineLeft from "../Icons/LineLeft";

export default function Home({className}) {
  return (
    <>
      <div className={className}>
        <div>
          <LineLeft />
          <h2>Deeper Understanding Better Solutions</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a looking at its layout.
          </p>
          <button>Get In Touch</button>
        </div>
      </div>
    </>
  );
}
