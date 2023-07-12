import OtpForm from "../../components/layout/OtpForm";
import { useRouter } from "next/router";

export default function Otp() {
  const router = useRouter();
  return (
    <div>
      <OtpForm userId={router.query.userId} />
    </div>
  );
}
