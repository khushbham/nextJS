import Header from "../../../components/layout/Header";
import TabSection from "../../../components/layout/TabSection";
import Footer from "../../../components/layout/Footer";
import ChangePasswordForm from "../../../components/layout/ChangePasswordForm";
import { useRouter } from "next/router";

export default function ChangePassword() {
  const router = useRouter();
  return (
    <div>
      <ChangePasswordForm
        otptoken={router.query.token}
        userId={router.query.userId}
      />
    </div>
  );
}
