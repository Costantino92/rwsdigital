import style from "../styles/Activities.module.css";
import NavBar from "./NavBar";
function Activities() {
  return (
    <div className={style.card}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h4 style={{ margin: "0", padding: "0" }}>Activities</h4>
          <span style={{ color: "gray" }}>890,344 Sales</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="12px"
            height="12px"
            viewBox="0 0 122.88 122.566"
          >
            <g>
              <path d="M3.78,66.082h47.875c2.045,0,3.717,1.988,3.717,4.414v46.479 c0,2.43-1.671,4.416-3.717,4.416H3.78c-2.043,0-3.717-1.986-3.717-4.416V70.496C0.063,68.07,1.737,66.082,3.78,66.082L3.78,66.082z M71.224,0H119.1c2.046,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H71.224 c-2.045,0-3.714-1.984-3.714-4.413V4.415C67.51,1.986,69.179,0,71.224,0L71.224,0z M3.714,0h47.878 c2.045,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H3.714C1.671,55.307,0,53.323,0,50.894V4.415 C0,1.986,1.671,0,3.714,0L3.714,0z M71.287,67.26h47.876c2.043,0,3.717,1.986,3.717,4.416v46.479c0,2.426-1.674,4.412-3.717,4.412 H71.287c-2.045,0-3.717-1.986-3.717-4.412V71.676C67.57,69.246,69.242,67.26,71.287,67.26L71.287,67.26z" />
            </g>
          </svg>
        </div>
      </div>
      <div className={style.timeline}>
        <div className={style.entry}>
          <div className={style.title}>
            <h4>08:42</h4>
          </div>
          <div className={style.body}>
            <p></p>
            <ul>
              <li>Outlines keep you honest.And keep structure</li>
            </ul>
          </div>
        </div>
        <div className={style.entry}>
          <div className={style.title}>
            <h4>10:00</h4>
          </div>
          <div className={style.body}>
            <p></p>
            <ul>
              <li>
                <b>AEOL meeting</b>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.entry}>
          <div className={style.title}>
            <h4>14:37</h4>
          </div>
          <div>
            <p style={{ paddingTop: "20" }}>
              <b>
                Make deposit <span style={{ color: "#44b2f6" }}>USD 700</span>.
                to ESL
              </b>
            </p>
          </div>
        </div>
        <div className={style.entry}>
          <div className={style.title}>
            <h4>16:50</h4>
          </div>
          <div className={style.body}>
            <ul>
              <li>Including in poorly driving and keep structure keep great</li>
            </ul>
          </div>
        </div>
        <div className={style.entry}>
          <div className={style.title}>
            <h4>21:03</h4>
          </div>
          <div className={style.body}>
            <ul>
              <li>
                <b>
                  New order placed{" "}
                  <span style={{ color: "#44b2f6" }}>#XF-2356</span>
                </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Activities;
