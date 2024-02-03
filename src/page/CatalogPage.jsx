import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdverts } from "../services/Api";
import { selectAdverts } from "../redux/selectors";

import LoadMore from "../components/Buttons/LoadMoreBtn";

import CatalogList from "../components/CatalogList/CatalogList";
import CatalogForm from "../components/CatalogForm/CatalogForm";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const [page, setPage] = useState(1);
  console.log(page);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    dispatch(getAllAdverts({ page: page }));
  }, [dispatch, page]);

  return (
    <>
      <CatalogForm />
      {adverts && <CatalogList adverts={adverts} />}
      <LoadMore onLoadMore={onLoadMore} />
    </>
  );
};

export default CatalogPage;
