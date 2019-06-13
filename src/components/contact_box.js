import React from "react";

class ContactBox extends React.Component {
  render(){
    return(
      <div>
        <h6 className="cM">Contact Me </h6>
        <div className="contactBC">
          <button className="btn contactButtons"><img src="images/mail.png"className="insta"/>Marcokhodr16@gmail.com</button>
          <button className="btn contactButtons"><img src="images/phone.png"className="insta"/>480-822-0511</button>
          <button className="btn contactButtons"><img src="images/insta.png"className="insta"/>Instagram</button>
          <button className="btn contactButtons"><img src="images/linker.png"className="insta"/>Linkden</button>
        </div>
      </div>
    )
  }
}


export default ContactBox;
