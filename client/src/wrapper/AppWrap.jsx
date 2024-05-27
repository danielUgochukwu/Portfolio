import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`w-full min-h-screen flex flex-row ${classNames}`}
      >
        <SocialMedia />

        <div className="flex-center flex-1 w-full flex-col py-16 px-8 max-xs:pt-16 max-xs:px-4 max-xs:pb-8 ">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
