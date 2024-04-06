type Props = {
  setShowProfile: (newVal: boolean) => void;
};
export function ProfileScreen(_props: Props) {
  return (
    <>
      <div>Profile Screen</div>
      <button
        className="App-button"
        onClick={() => _props.setShowProfile(false)}
      >
        Back
      </button>
    </>
  );
}
