const Footer = ({ portfolioData }) => (
  <footer className="bg-gray-900 text-white py-4 sm:py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
      <p className="text-sm sm:text-base text-gray-300">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">
          {portfolioData.name}
        </span>
        . All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
