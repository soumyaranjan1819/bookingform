import React from "react";

const form = () => {
  return (
    <div className="ml-10">
      <div className=" text-5xl font-bold mb-4 flex justify-center">
        Make Your Reservation
      </div>
      <br />
      <div className="text-lg">Enter Your Name</div>
      <input
        type="text"
        placeholder="First Name"
        className="p-2 border border-black "
      />
      <input
        type="text"
        placeholder="Last Name"
        className=" ml-4 p-2 border border-black"
      />
      <br />
      <div className="text-lg mt-3">Enter Your Email</div>
      <input
        type="email"
        placeholder="email"
        className="p-2 border border-black"
      />
      <br />
      <div className="mt-3 text-lg">Check-In</div>
      <input type="date" name="" id="" className=" p-2 border border-black" />
      <div className="mt-3 text-lg">Check-Out</div>
      <input type="date" name="" id="" className=" p-2 border border-black" />
      <div className="my-3">
        <input type="radio" id="html" name="sex" value="Male" /> {" "}
        <label for="html">Male</label>
          <input type="radio" id="css" name="sex" value="Fe-male" /> {" "}
        <label for="css">Fe-male</label>
          <input type="radio" id="css" name="sex" value="other" /> {" "}
        <label for="css">Others</label>
      </div>
      <label htmlFor="">No of Rooms</label>
      <br />
      <input type="number" className="p-2 border border-black" />
      <div className="mt-3">
        <label for="children">No of Children:</label>
        <select id="children" name="">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <input type="reset" value="" className="mt-3 text-black" />
      <button className="my-4 bg-gray-400 p-1.5 rounded">Submit</button>
    </div>
  );
};

export default form;
