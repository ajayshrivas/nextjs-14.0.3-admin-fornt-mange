export default function Contact(){
    return(
<>
  <div className="flex items-center justify-center p-12">
    {/* Author: FormBold Team */}
    {/* Learn More: https://formbold.com */}
    <div className="mx-auto w-full max-w-[550px]">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            id="message"
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            defaultValue={""}
          />
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>


        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
                <button id="prevMonth" className="text-white">
                    Previous
                </button>
                <h2 id="currentMonth" className="text-white" />
                <button id="nextMonth" className="text-white">
                    Next
                </button>
                </div>
                <div className="grid grid-cols-7 gap-2 p-4" id="calendar">
                {/* Calendar Days Go Here */}
                </div>
                <div
                id="myModal"
                className="modal hidden fixed inset-0 flex items-center justify-center z-50"
                >
                <div className="modal-overlay absolute inset-0 bg-black opacity-50" />
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Selected Date</p>
                        <button
                        id="closeModal"
                        className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
                        >
                        ✕
                        </button>
                    </div>
                    <div id="modalDate" className="text-xl font-semibold" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        </>
        );
}
