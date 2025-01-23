const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Vivek Raj. All rights reserved.</p>
        <p>
          <a href="https://github.com/vivekraj2704" className="text-blue-400 hover:underline">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/in/vivek-raj-02448624b/" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  