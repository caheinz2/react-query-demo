type Props = {
  title: string;
  thumbnailUri: string;
};

export function Card(props: Props) {
  return <div className="Card-container">{props.title}</div>;
}
