export { Cursor } from "../Cursor.jsx";
import useCursor from "./hooks/useCursor";

export default function Cursor() {
  useCursor();
  return (
    <>
      <div id="cur" />
      <div id="rng" />
    </>
  );
}
