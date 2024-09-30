import { useState } from "react";

const ModalExample = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-bold text-black dark:text-white">Modals</h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <a className="font-medium" href="index.html">Dashboard /</a>
            </li>
            <li className="font-medium text-primary">Modals</li>
          </ol>
        </nav>
      </div>

      {/* Modal buttons */}
      <div className="rounded-sm border border-stroke bg-white p-10 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap justify-center gap-5">
          {/* Modal 1 */}
          <div>
            <button onClick={() => setModalOpen1(true)} className="rounded-md bg-primary px-9 py-3 font-medium text-white">
              Modal 1
            </button>
            {modalOpen1 && (
              <div className="fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
                <div onClick={() => setModalOpen1(false)} className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
                  <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Your Message Sent Successfully
                  </h3>
                  <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
                  <p className="mb-10 font-medium">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="-mx-3 flex flex-wrap gap-y-4">
                    <div className="w-full px-3 2xsm:w-1/2">
                      <button onClick={() => setModalOpen1(false)} className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black hover:border-meta-1 hover:bg-meta-1 hover:text-white">
                        Cancel
                      </button>
                    </div>
                    <div className="w-full px-3 2xsm:w-1/2">
                      <button className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white hover:bg-opacity-90">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal 2 */}
          <div>
            <button onClick={() => setModalOpen2(true)} className="rounded-md bg-primary px-9 py-3 font-medium text-white">
              Modal 2
            </button>
            {modalOpen2 && (
              <div className="fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
                <div onClick={() => setModalOpen2(false)} className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
                  <span className="mx-auto inline-block">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.1" width="60" height="60" rx="30" fill="#DC2626"></rect>
                      <path d="M30 27.2498V29.9998V27.2498ZM30 35.4999H30.0134H30ZM20.6914 41H39.3086C41.3778 41 42.6704 38.7078 41.6358 36.8749L32.3272 20.3747C31.2926 18.5418 28.7074 18.5418 27.6728 20.3747L18.3642 36.8749C17.3296 38.7078 18.6222 41 20.6914 41Z" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Deactivate Your Account
                  </h3>
                  <p className="mb-10 font-medium">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="-mx-3 flex flex-wrap gap-y-4">
                    <div className="w-full px-3 2xsm:w-1/2">
                      <button onClick={() => setModalOpen2(false)} className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black hover:border-meta-1 hover:bg-meta-1 hover:text-white">
                        Cancel
                      </button>
                    </div>
                    <div className="w-full px-3 2xsm:w-1/2">
                      <button className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white hover:bg-opacity-90">
                        Deactivate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal 3 */}
          <div>
            <button onClick={() => setModalOpen3(true)} className="rounded-md bg-primary px-9 py-3 font-medium text-white">
              Modal 3
            </button>
            {modalOpen3 && (
              <div className="fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
                <div onClick={() => setModalOpen3(false)} className="relative w-full max-w-142.5 rounded-lg bg-primary px-8 py-12 text-center md:px-17.5 md:py-15">
                  <span className="mx-auto inline-block">
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.1" width="78" height="78" rx="37" fill="white"></rect>
                      <path d="M39.6114 16.8999C27.0342 16.8999 16.8984 27.0357 16.8984 39.6129C16.8984 52.1901 27.0342 62.3999 39.6114 62.3999C52.1887 62.3999 62.3984 52.1901 62.3984 39.6129C62.3984 27.0357 52.1887 16.8999 39.6114 16.8999ZM39.6114 59.8105C28.5139 59.8105 19.4879 50.7105 19.4879 39.6129C19.4879 28.5154 28.5139 19.4893 39.6114 19.4893C50.709 19.4893 59.809 28.5154 59.809 39.6129C59.809 50.7105 50.709 59.8105 39.6114 59.8105Z" fill="white"></path>
                      <path d="M49.6748 42.2023H29.5513C28.8854 42.2023 28.2935 42.4982 27.8496 43.0161C27.4797 43.534 27.2578 44.1258 27.4057 44.7917C28.5155 50.5624 33.6204 54.8535 39.613 54.8535C45.6057 54.8535 50.7106 50.6364 51.8204 44.7917C51.9683 44.1998 51.7464 43.534 51.3765 43.0161C51.0067 42.4982 50.4148 42.2023 49.7489 42.2023H49.6748Z" fill="white"></path>
                    </svg>
                  </span>
                  <button onClick={() => setModalOpen3(false)} className="absolute right-5 top-5 text-white hover:text-gray">
                    <svg className="fill-current" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.4" clipPath="url(#clip0_88_10224)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.2081 8.792C21.5986 9.18253 21.5986 9.81569 21.2081 10.2062L16.4142 15.0001L21.2081 19.7939C21.5986 20.1845 21.5986 20.8176 21.2081 21.2082C20.8176 21.5987 20.1845 21.5987 19.794 21.2082L15.0001 16.4143L10.2062 21.2082C9.81566 21.5987 9.1825 21.5987 8.79197 21.2082C8.40145 20.8176 8.40145 20.1845 8.79197 19.7939L13.5858 15.0001L8.79197 10.2062C8.40145 9.81569 8.40145 9.18253 8.79197 8.792C9.1825 8.40148 9.81566 8.40148 10.2062 8.792L15.0001 13.5859L19.794 8.792C20.1845 8.40148 20.8176 8.40148 21.2081 8.792Z" fill="white"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_88_10224">
                          <rect width="30" height="30" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <h3 className="mt-5.5 pb-2 text-xl font-bold text-white sm:text-2xl">Your Message Sent Successfully</h3>
                  <p className="mb-10 font-medium text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalExample;
