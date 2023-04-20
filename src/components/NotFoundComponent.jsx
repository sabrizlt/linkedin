const NotFoundComponent = () => (
  <div className="text-center mt-5 pt-5">
    <h1 className="mt-3">404 - Page Not Found</h1>

    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster mt-5">
      <div className="wheel"></div>
      <div className="hamster">
        <div className="hamster__body">
          <div className="hamster__head">
            <div className="hamster__ear"></div>
            <div className="hamster__eye"></div>
            <div className="hamster__nose"></div>
          </div>
          <div className="hamster__limb hamster__limb--fr"></div>
          <div className="hamster__limb hamster__limb--fl"></div>
          <div className="hamster__limb hamster__limb--br"></div>
          <div className="hamster__limb hamster__limb--bl"></div>
          <div className="hamster__tail"></div>
        </div>
      </div>
      <div className="spoke"></div>
    </div>
  </div>
);
export default NotFoundComponent;
