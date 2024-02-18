export default function Footer() {
  return (
    <footer className="bg-gradientHome">
      <hr className="mb-4 border-gray-700 sm:mx-auto lg:mb-6" />
      <div className="flex mt-4 justify-center sm:mt-0">
        <a
          href="https://github.com/advp7"
          className="text-gray-500 hover:text-textPrimary ms-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">GitHub account</span>
        </a>
        <a
          href="https://www.linkedin.com/in/advaith-praveen/"
          className="text-gray-500 hover:text-textPrimary ms-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 17H3V8H6V17ZM4.5 6.7C3.7 6.7 3 6 3 5.2C3 4.4 3.7 3.7 4.5 3.7C5.3 3.7 6 4.4 6 5.2C6 6 5.3 6.7 4.5 6.7ZM17 17H14V12C14 10.9 14 9.7 13 9.7C12 9.7 12 10.9 12 12V17H9V8H12V9.2H12.2C12.9 8.3 14 7.7 15.3 7.7C17.4 7.7 17 9.1 17 10.7V17Z" />
          </svg>

          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-sm text-gray-400 my-1 text-center">
          created by {""}
          <a
            href="https://advp7.github.io/portfolio/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Advaith Praveen
          </a>
        </span>
      </div>
    </footer>
  );
}
