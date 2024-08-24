
import { InfiniteMovingCardsDemo } from "./components/Helper/InfiniteMovingCards";
import FeatureJobs from "./components/home/FeatureJobs";
import Home from "./components/home/Home";
import JobCategory from "./components/home/JobCategory";

export default function DashBoard() {
  return (
    <>
      <Home />
      <JobCategory></JobCategory>
      <FeatureJobs />
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
    </>
  );
}
