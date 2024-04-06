type Props = {
  setShowProducts: (newVal: boolean) => void;
};
export function ProductScreen(_props: Props) {
  return (
    <>
      <div>Product Screen</div>
      <button
        className="App-button"
        onClick={() => _props.setShowProducts(false)}
      >
        Back
      </button>
    </>
  );
}
