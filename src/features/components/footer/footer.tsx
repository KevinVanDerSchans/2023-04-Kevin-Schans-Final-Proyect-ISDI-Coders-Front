import style from './footer.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <span className={style.dancersNames}>Alex & Melanie © 2023</span>
        <address className={style.companyName}>Kevin Schans | ISDI Coders</address>
      </div>
    </footer>
  );
}
