import { skipToMainContent } from '../utils/accessibility';

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault();
        skipToMainContent();
      }}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all duration-200 font-semibold"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;

