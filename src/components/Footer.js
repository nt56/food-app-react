const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Nagbhushan</strong>
      </p>
    </footer>
  );
};

export default Footer;
