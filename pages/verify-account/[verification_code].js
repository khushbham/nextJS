import VerifyAccount from "../../components/layout/VerifyAccount";
import { useRouter } from "next/router";
const Detail = () => {
  const router = useRouter();
  return (
    <div>
      <VerifyAccount verification_link={router.query.verification_code} />
    </div>
  );
};

export default Detail;
