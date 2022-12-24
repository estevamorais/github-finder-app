import styles from "./styles/App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.appTitle}>Github Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
