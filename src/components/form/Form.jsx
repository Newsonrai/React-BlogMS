import React from "react";

const Form = ({ type }) => {

  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 items-start gap-4 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">
            {type} <br />
            BLOG
          </h1>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                </div>
                <a href="#" className="text-[#007bff] text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>rainewson36@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              {/* LinkedIn */}
              <li className="bg-[#e6e6e6cf] h-10 w-8 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.27h-3v-5.604c0-1.337-.027-3.059-1.864-3.059-1.865 0-2.151 1.456-2.151 2.961v5.702h-3v-11h2.881v1.501h.041c.401-.757 1.379-1.556 2.84-1.556 3.038 0 3.6 2.001 3.6 4.604v6.451z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              {/* Facebook */}
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.49v-9.294H9.69V10.41h3.125V7.797c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.795.144v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.587l-.467 3.297h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.325V1.325C24 .593 23.407 0 22.675 0z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              {/* Twitter */}
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23.954 4.569c-.885.39-1.83.654-2.825.774 1.013-.608 1.794-1.57 2.165-2.724-.95.564-2.005.974-3.127 1.2a4.488 4.488 0 0 0-7.66 4.086C7.69 7.786 4.064 5.796 1.64 2.905c-.777 1.338-.38 3.097.896 3.994-.845-.026-1.637-.26-2.34-.65v.065c0 2.148 1.528 3.942 3.548 4.346-.372.102-.764.157-1.168.157-.287 0-.566-.028-.837-.08.565 1.767 2.21 3.052 4.158 3.086a9.012 9.012 0 0 1-5.567 1.92c-.361 0-.717-.02-1.075-.062 1.985 1.276 4.343 2.021 6.865 2.021 8.234 0 12.734-6.828 12.734-12.74 0-.194-.005-.386-.014-.578a9.093 9.093 0 0 0 2.234-2.328z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
         
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          
          />
          <input
            type="text"
            placeholder="Title"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          />
          <input
            type="text"
            placeholder="Subtitle"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          
          />
          <input
            type="text"
            placeholder="Category"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          />
          <input
            type="file"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          />
          <textarea
            placeholder="Description"
            rows="6"
            className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
