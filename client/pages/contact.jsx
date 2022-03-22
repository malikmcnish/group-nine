import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <div className="container">
        <strong
          style={{
            color: 'red',
            fontSize: '20pt',
            marginLeft: '48%',
          }}
        >
          Contact us
        </strong>

        <form
          className="form"
          style={{
            padding: '12px 20px',
            marginRight: '50%',
            borderRadius: '5px',
          }}
        >
          <div className="name">
            <label for="firstName">First Name</label>
            <input
              style={{ borderRadius: '5px' }}
              type="text"
              name="firstName"
              className="firstName"
              tabIndex="1"
              placeholder="First name..."
            />
            <label for="lastName">Last Name</label>
            <input
              style={{ borderRadius: '5px' }}
              type="text"
              name="lastName"
              className="lastName"
              tabIndex="2"
              placeholder="Last name..."
            />

            <label for="email">Email</label>
            <input
              style={{ borderRadius: '5px' }}
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="example@corp.com"
              tabIndex="3"
            />

            <label for="message">Message</label>
            <textarea
              style={{ borderRadius: '5px' }}
              placeholder="Start typing..."
              className="message"
              name="message"
            />

            <button
              type="submit"
              className="send"
              style={{
                border: '1px solid green',
                background: 'green',
                borderRadius: '5px',
                marginTop: '10px',
              }}
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// import React from 'react'
// import ContainerBlock from '@/layout/ContainerBlock'

// import meta from '@/constants/meta'

// export default function ContactPage() {
//   return (
//     <ContainerBlock title={meta.contact.title} description={meta.contact.description}>
//       <div className="flex flex-col items-center justify-center px-4 py-32">
//         <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"></div>
//         <div className="w-full md:w-1/2 md:px-3"></div>
//         <h1 className="text-4xl font-extrabold tracking-tight pb-4 text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
//           <span className="block xl:inline">Contact Us</span>
//         </h1>

//         <div className="w-full md:w-96 md:max-w-full mx-auto">
//           <div className="p-6 border border-gray-300 sm:rounded-md">
//             <form method="POST">
//               <div className="block mb-6">
//                 <span className="text-gray-700">Your name</span>
//                 <input
//                   type="text"
//                   name="name"
//                   className="_contact-input_"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div className="block mb-6">
//                 <span className="text-gray-700">Email address</span>
//                 <input
//                   name="email"
//                   type="email"
//                   className="_contact-input_"
//                   placeholder="john.doe@example.com"
//                   required
//                 />
//               </div>
//               <div className="block mb-6">
//                 <span className="text-gray-700">Message</span>
//                 <textarea
//                   name="message"
//                   className="_contact-input_"
//                   rows="3"
//                   placeholder="Type your message here..."
//                 />
//               </div>
//               <div className="mb-6">
//                 <button
//                   type="submit"
//                   className="h-10 px-5 text-green-100 bg-green-700 rounded transition-colors duration-150 focus:shadow-outline hover:bg-green-800"
//                 >
//                   Contact Us
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </ContainerBlock>
//   )
// }
