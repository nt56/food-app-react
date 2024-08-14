const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer bg-gray-500 p-8 shadow-lg text-center w-full mt-10">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Nagbhushan</strong>
      </p>
    </footer>
  );
};

export default Footer;
