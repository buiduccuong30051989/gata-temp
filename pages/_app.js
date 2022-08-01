import { ConfigProvider } from "react-avatar";
import { BASE_COLORS } from "constant/common";
import "styles/main.scss";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ConfigProvider colors={BASE_COLORS}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
