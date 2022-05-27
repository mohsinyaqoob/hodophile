import { Content } from "antd/lib/layout/layout";
import FooterBottom from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
