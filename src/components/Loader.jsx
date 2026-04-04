export default function Loader({ visible }) {
  return (
    <div id="loader" className={visible ? "" : "gone"}>
      <div className="l-pre">Initializing Systems</div>
      <div className="l-name">
        <span className="lc">ISHANT&nbsp;</span>
        <span className="lc">SINGH</span>
      </div>
      <div className="l-sub">Backend Engineer</div>
      <div className="l-bar">
        <div className="l-fill" />
      </div>
    </div>
  );
}
