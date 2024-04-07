import { Routes } from "../types/Routes";

type Props = {
  setActiveRoute: (newVal: Routes) => void;
};
export function ProfileScreen(_props: Props) {
  return (
    <>
      <div>Profile Screen</div>
      <button
        className="App-button"
        onClick={() => _props.setActiveRoute(Routes.HOME)}
      >
        Back
      </button>
    </>
  );
}
