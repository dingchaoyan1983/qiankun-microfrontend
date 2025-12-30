import {
  useTest,
} from "hostapp/HostProvider";

export const Button = () => {
  const test = useTest();
  return (
    <button onClick={() => test?.setTest?.("hello hostapp")}>Set Test</button>
  )
}
