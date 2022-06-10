import React, { useContext } from "react";
import { userAuthContext } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";

const Home = () => {
  const { user, logOut } = useContext(userAuthContext);
  console.log(user);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <b>{user && user.email}</b>
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
