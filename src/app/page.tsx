import Image from "next/image";
import styles from "./page.module.css";
import { Building } from "./model";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 style={{marginBottom: "5%"}}>Visualise.it</h1>

      <div className="row" style={{display: "inline-flex", width: "1200px"}}>
        <div className="column">
          <div
            style={{ borderStyle: "solid", borderWidth: "medium" }}
          >
            <Building></Building>
          </div>
        </div>
      <div className="column" style={{textAlign: "center", width: "100%"}}>
      <div id="info">Description</div>
      <div id="info">Description</div>
      <div id="info">Description</div>
      <div id="info">Description</div>
      <div id="info">Description</div>

      </div>
        
      </div>

    </main>
  );
}
