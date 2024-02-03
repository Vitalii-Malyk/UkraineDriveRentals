import { LoadMoreBtn } from "./Buttons.styled";
const LoadMore = ({ onLoadMore }) => {
  return <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>;
};

export default LoadMore;
