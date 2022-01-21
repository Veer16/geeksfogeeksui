import { useParams } from "react-router";
export default function ComponentB() {
  // react hooks
  const params = useParams<{ name: string }>();
  return <div>{`hello ${params.name}`}</div>;
}
