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
