import dynamic from 'next/dynamic'
const DiscoverMap = dynamic(() => import("../components/layout/DiscoverMap"), {
  ssr: false,
});
export default function Discover() {
  return (
    <div>
      <DiscoverMap />
    </div>
  );
}
