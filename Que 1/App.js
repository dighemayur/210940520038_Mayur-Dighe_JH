import { useState } from "react";

export default function App() {
  return (
    <div>
      <Myfunction></Myfunction>
    </div>
  );
}

function Myfunction() {
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);

  const takemessage = (e) => {
    setmessage(e.target.value);
  };

  const send = () => {
    if (message == "") {
      alert(" please enter message");
      return;
    }
    const newlist = [...list, message];
    setlist(newlist);

    setmessage("");
  };
  return (
    <div>
      <div className="bg-secondary text-light p-3 fs-2 text-decoration-underline fw-bold">
        MyChatApp by mayur dighe_038
      </div>
      <div className="mt-2">
        <input
          className=" w-75 form-form-control-lg ms-2 rounded-3 fs-2"
          style={{ height: "10vh" }}
          type="text"
          placeholder="Lets chat here...."
          value={message}
          onChange={takemessage}
        />
        <input
          className="ms-3 p-3 fs-2  rounded-3 btn-outline-secondary"
          style={{ height: "10vh" }}
          type="button"
          value="SEND"
          onClick={send}
        />
      </div>
      {list.map((item, index) => (
        <div
          className="alert alert-secondary mt-3 fw-bold rounded-2"
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
