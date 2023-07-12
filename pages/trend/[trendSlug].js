import SingleDescriptionSec from "../../components/layout/Detail/SingleDescriptionSec";
import { useRouter } from "next/router";
const Detail = () => {
  const router = useRouter();
  return (
    <div>
      <SingleDescriptionSec slug={router.query.trendSlug} />
    </div>
  );
};

export default Detail;
