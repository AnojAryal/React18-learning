import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return <AiFillHeart color="#ff6bf1" size={30} onClick={toggle} />;
  } else {
    return <AiOutlineHeart size={30} onClick={toggle} />;
  }
};

export default Like;
