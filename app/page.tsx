import Discover from "app/(home)/Discover";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(home)/Other";
import Subscribe from "app/(home)/Subscribe";
import Sidebar from "app/(home)/Sidebar";

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Discover />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="bais1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
