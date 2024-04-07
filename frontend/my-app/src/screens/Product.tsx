import { Routes } from "../types/Routes";

type Props = {
  setActiveRoute: (newVal: Routes) => void;
};
export function ProductScreen(_props: Props) {
  return (
    <>
      <div>Product Screen</div>
      <button
        className="App-button"
        onClick={() => _props.setActiveRoute(Routes.HOME)}
      >
        Back
      </button>
    </>
  );
}
