import { FC } from "react";
import ContentLoader from "react-content-loader";

const MyLoader: FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={390}
    viewBox="280 390"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect rx="20" ry="20" width="280" height="390" />
  </ContentLoader>
);

export default MyLoader;
