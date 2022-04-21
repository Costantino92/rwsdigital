import style from "../styles/LatestTechTrends.module.css";
import Image from "next/image";

function LatestTechTrends() {
  return (
    <div className={style.card}>
      <div className={style.title}>
        <div>
          <h4 className={style.h4}>Trends</h4>
          <span>Latest tech trends</span>
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
      <div className={style.latest}>
        <div className={style.authorDiv}>
          <div>
            <Image
              src={"/../public/topAuthors.PNG "}
              width={40}
              height={40}
              alt="top"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h4 style={{ margin: "0", padding: "0" }}> Top Authors</h4>
              <span style={{ color: "grey" }}>Ricky Hunt, Sandra Trepp</span>
            </div>
            <div>
              <span className={style.span}>+82$</span>
            </div>
          </div>
        </div>
        <div className={style.authorDiv}>
          <div>
            <Image
              src={"/../public/topSales.PNG"}
              width={40}
              height={40}
              alt="top"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h4 style={{ margin: "0", padding: "0" }}> Top Authors</h4>
              <span style={{ color: "grey" }}>Ricky Hunt, Sandra Trepp</span>
            </div>
            <div>
              <span className={style.span}>+82$</span>
            </div>
          </div>
        </div>
        <div className={style.authorDiv}>
          <div>
            <Image
              src={"/../public/topEngagement.PNG"}
              width={40}
              height={40}
              alt="top"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h4 style={{ margin: "0", padding: "0" }}> Top Authors</h4>
              <span style={{ color: "grey" }}>Ricky Hunt, Sandra Trepp</span>
            </div>
            <div>
              <span className={style.span}>+82$</span>
            </div>
          </div>
        </div>
        <div className={style.authorDiv}>
          <div>
            <Image
              src={"/../public/topAuthors.PNG "}
              width={40}
              height={40}
              alt="top"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h4 style={{ margin: "0", padding: "0" }}> Top Authors</h4>
              <span style={{ color: "grey" }}>Ricky Hunt, Sandra Trepp</span>
            </div>
            <div>
              <span className={style.span}>+82$</span>
            </div>
          </div>
        </div>
        <div className={style.authorDiv}>
          <div>
            <Image
              src={"/../public/topSales.PNG"}
              width={40}
              height={40}
              alt="top"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h4 style={{ margin: "0", padding: "0" }}> Top Authors</h4>
              <span style={{ color: "grey" }}>Ricky Hunt, Sandra Trepp</span>
            </div>
            <div>
              <span className={style.span}>+82$</span>
            </div>
          </div>
        </div>
        <div className={style.authorDiv}>
          <div>
            <Image
              src={"/../public/topEngagement.PNG"}
              width={40}
              height={40}
              alt="top"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h4 style={{ margin: "0", padding: "0" }}> Top Authors</h4>
              <span style={{ color: "grey" }}>Ricky Hunt, Sandra Trepp</span>
            </div>
            <div>
              <span className={style.span}>+82$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LatestTechTrends;
