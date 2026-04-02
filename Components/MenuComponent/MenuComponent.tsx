import style from "./Menu.module.css";

export default function MenuComponent() {
  return (
    <div className={style.main_menu}>
      <div className={style.menus}>
        <div className={style.menu}>Home</div>
        <div className={style.menu}>Tech</div>
        <div className={style.menu}>Politics</div>
        <div className={style.menu}>Entertainment</div>
        <div className={style.menu}>Finance</div>
        <div className={style.menu}>Music</div>
        <div className={style.menu}>Life</div>
      </div>
    </div>
  );
}
