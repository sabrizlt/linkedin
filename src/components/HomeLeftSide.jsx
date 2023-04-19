import HomeLsFirst from "./HomeLsFirst";
import HomeLsSecond from "./HomeLsSecond";

const HomeLeftSide = () => {
  return (
    <>
      <HomeLsFirst />
      <div className="my-4">
        <HomeLsSecond />
      </div>
    </>
  );
};
export default HomeLeftSide;
