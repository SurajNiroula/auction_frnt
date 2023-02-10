import logo from "../assets/images/logoo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      width={200}
      height={90}
      alt='auction logo'
      className='logo'
    />
  );
};
export default Logo;
