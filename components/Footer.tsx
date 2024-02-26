import { FC } from "react";

const Footer: FC = () => {
  const thisYear = new Date().getFullYear();

  return <footer>Copyright {thisYear} MOHAMMAD HARIS</footer>;
};

export default Footer;
