import { FiRss } from "react-icons/fi";

interface ISize {
  size?: number;
}

function Broadcast({ size = 15 }: ISize) {
  return (
    <>
      <FiRss size={size} color="lime" />
    </>
  );
}

export default Broadcast;
