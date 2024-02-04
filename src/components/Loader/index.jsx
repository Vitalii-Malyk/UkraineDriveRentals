import { MagnifyingGlass } from "react-loader-spinner";

import { Backdrop } from "./Loader.styled";

const Loader = () => {
  return (
    <Backdrop>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="var(--color-footer-header-wrap)"
      />
    </Backdrop>
  );
};

export default Loader;
