import RecentViewed from "../components/layout/RecentViewed";
export default function Home() {
  return (
    <div>
      <RecentViewed showExploreButton={false} onEmptyRecordShowThisSection={true} />
    </div>
  );
}
