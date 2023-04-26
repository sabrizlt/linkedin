import ModifyProfileComponent from "./RightSide/ModifyProfileComponent";
import MeetProfileComponent from "./RightSide/MeetProfileComponent";
import CoursesProfileComponent from "./RightSide/CoursesProfileComponent";
import { useSelector } from "react-redux";
const RightSideComponent = () => {
  const profiles = useSelector((state) => state.data.allProfiles);

  const getRandomProfiles = (profiles) => {
    const shuffled = profiles?.sort(() => 0.5 - Math.random());
    return shuffled?.slice(0, 4);
  };

  return (
    <>
      {/*prima parte della lateral bar, */}
      <ModifyProfileComponent />
      {/*fine prima parte della lateral bar, */}

      {/*seconda parte della lateral bar,contenente un banner ! */}
      <div className="">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
          className="rounded-3 img-fluid mb-3 w-100"
        />
      </div>
      {/*seconda parte della lateral bar,contenente un banner ! */}

      {/*terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}
      <div className="border bg-white p-2 border border-1 rounded " id="myNav">
        <h5>Persone che potresti conoscere</h5>
        {getRandomProfiles(profiles)?.map((profile) => (
          <MeetProfileComponent profile={profile} key={profile._id} />
        ))}
      </div>

      {/*fine terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}

      {/*inzio 4 parte della lateral bar,contenente una lista di corsi da poter seguire! */}
      <CoursesProfileComponent />

      {/*fine 4 parte della lateral bar,contenente una lista di corsi da poter seguire! */}

      {/*inzio 5 parte della lateral bar,contenente la stesso banner al punto 2* */}
      <div className="sticky-top top-50">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
          className="rounded-3 img-fluid mb-3 w-100"
        />
      </div>
    </>
  );
};

export default RightSideComponent;
