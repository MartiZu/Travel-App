import Loading from "../loading";
import { Suspense } from "react";
import TravelList from "./TravelList";
export default function Travels() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <TravelList />
      </Suspense>
    </main>
  );
}
