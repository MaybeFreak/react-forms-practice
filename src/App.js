import { useState } from "react";
import "./App.css";

export default function App() {
  
  //TODO: Add your state fields here

  const initalInfo = {
    name: '',
    address: '',
    phone: '',
    email: '',
    complaint: '',
    contact: '',
    consent: false,
  }

  const [formInfo, setformInfo] = useState(initalInfo)

  const handelChange = (event) => {

    const name = event.target.name
    const value = event.target.value
    const newInfo = {...formInfo}

    console.log(name, value)

    newInfo[name] = value

    setformInfo(newInfo)
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    console.table(formInfo)
  }

  return (
    <>
      <form className="form" onSubmit={handelSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required onChange={handelChange} value={formInfo.name}/>
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handelChange} value={formInfo.address}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handelChange} value={formInfo.phone}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handelChange} value={formInfo.email}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handelChange}
              value={formInfo.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handelChange} checked={formInfo.contact === 'phone'}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={handelChange} checked={formInfo.contact === 'email'}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={handelChange} checked={formInfo.contact === 'post'}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={handelChange} checked={formInfo.contact === 'none'}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={handelChange} checked={formInfo.consent}/>
          </label>
        </div>
        <input type="submit" value="Submit!"/>
      </form>
    </>
  );
}
