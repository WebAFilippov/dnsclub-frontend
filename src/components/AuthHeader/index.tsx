import { useSelector } from "react-redux";

import AuthBtn from "../Buttons/AuthBtn";

interface IStateAuth {
  auth: {
    auth: boolean;
  };
}

const AuthHeader: React.FC = () => {
  const { auth } = useSelector((state: IStateAuth) => state.auth);

  return (
    <>
      {!auth ? (
        <AuthBtn/>
      ) : (
        <div>username</div>
      )}
    </>
  );
};

export default AuthHeader;
