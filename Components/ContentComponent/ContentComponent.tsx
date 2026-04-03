import style from "./Content.module.css";

export default function ContentComponent() {
  return (
    <div className={style.content_area}>
      <div className={style.head_1}>
        The YouTuber who has become one of Gen Z’s most beloved celebrities
      </div>
      <div className={style.date_category}>
        <div className={`category mr-5`}>Life</div>
        <div className={style.date}>August 29, 2019</div>
      </div>
      <div className={style.detail}>
        Last week, news broke that James Dean will star in a new movie—64 years
        after his death. A production company called Magic City got the rights
        to Dean's image from the late actor's estate...
      </div>
    </div>
  );
}
