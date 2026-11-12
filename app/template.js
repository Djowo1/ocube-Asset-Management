import s from "./template.module.css";
export default function Template({ children }) {
  return <div className={s.t}>{children}</div>;
}
