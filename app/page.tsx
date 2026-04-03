import MenuComponent from "@/Components/MenuComponent/MenuComponent";
import LogoComponent from "@/Components/LogoComponent/LogoComponent";
import style from "./page.module.css";
import ContentComponent from "@/Components/ContentComponent/ContentComponent";

export default function Home() {
  return (
    <div className={style.bg}>
      <div className="container">
        <div className={style.header}>
          <LogoComponent />
          <MenuComponent />
        </div>
        <ContentComponent />
      </div>
    </div>
  );
}
