import SubCategoryBanner from "../../components/layout/SubCategoryBanner";
import PopularTrends from "../../components/layout/PopularTrends";
import NewTrends from "../../components/layout/NewTrends";
import SimilarTrends from "../../components/layout/SimilarTrends";

const SubCategory = () => {
  return (
    <div>
      <SubCategoryBanner />
      <PopularTrends />
      <NewTrends />
      <SimilarTrends />
    </div>
  );
};

export default SubCategory;
