import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdverts } from "../services/Api";
import {
  selectAdverts,
  selectError,
  // selectFilter,
  selectIsLoading,
} from "../redux/selectors";

import LoadMore from "../components/Buttons/LoadMoreBtn";

import CatalogList from "../components/CatalogList/CatalogList";
import CatalogForm from "../components/CatalogForm/CatalogForm";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  // const filtered = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);

  const onLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    dispatch(getAllAdverts(page));
  }, [dispatch, page]);

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (adverts.length === 0) {
    return <div>No adverts found.</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <CatalogForm />
      {adverts && <CatalogList adverts={adverts} />}
      <LoadMore onLoadMore={onLoadMore} />
    </>
  );
};

export default CatalogPage;
