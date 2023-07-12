import SidebarTabs from "../components/layout/SidebarTabs";
import InnovateSlider from "../components/layout/InnovateSlider";
import RecentViewed from "../components/layout/RecentViewed";
import InspirationSec from "../components/layout/InspirationSec";
import Innovate from "../components/layout/Innovate";
import Blogs from "../components/layout/Blogs";
import GallerySec from "../components/layout/GallerySec";
export default function Home() {
  return (
    <div>
      <SidebarTabs />
      <RecentViewed showExploreButton={true} dataLimit={5} onEmptyRecordShowThisSection={false}/>
      <InspirationSec />
      <Innovate />
      <Blogs />
      <InnovateSlider />
      <GallerySec />
    </div>
  );
}
