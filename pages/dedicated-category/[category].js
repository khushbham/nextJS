import { useState, useEffect } from "react";
import CategoryHead from "../../components/layout/CategoryHead";
import PopularCategories from "../../components/layout/PopularCategories";
import { useRouter } from "next/router";
import { categoryRecordsBySlug } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import CategoryContent from "../../components/layout/category/CategoryContent";

const Category = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    if (router.query.category) {
      dispatch(categoryRecordsBySlug(router.query.category)).then((res) => {
        //console.log(res);
        if (res && res.success) {
          setData(res.data);
          setShowLoader(false);
        }
      });
    }
  }, [router.query.category]);
  return (
    !showLoader && (
      <div>
        <CategoryContent data={data}/>
      </div>
    )
  );
};

export default Category;
