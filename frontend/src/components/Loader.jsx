import "../Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__inner">
        <div className="loader__logo">IS</div>
        <div className="loader__bar">
          <div className="loader__progress" />
        </div>
        <span className="loader__text">Loading</span>
      </div>
    </div>
  );
}
