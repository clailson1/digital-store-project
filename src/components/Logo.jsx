// import logo from '../assets/logo-header.svg';

const Logo = ({ logo }) => {
    return (  
        <>
            <img 
                src={logo} alt="logo-header" 
                style={{ height: "44px", width: "253px"}}
            />
        </>
    );
}
 
export default Logo;