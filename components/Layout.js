import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar /> <div> {children} </div>
    </>
  );
};

export default Layout;
