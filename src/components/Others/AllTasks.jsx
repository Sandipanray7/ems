import React from "react";

const AllTasks = () => {
  return (
    <div className="mt-5 p-4 rounded bg-stone-800">
        <div className="flex justify-center items-center text-3xl p-3">All Tasks</div>
      <div id="alltaskdiv" className="h-60 overflow-auto"><div className="w-full flex justify-between mt-3 bg-red-400 px-3 py-4 rounded-lg">
        <h3>Sandipan</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div>
      <div className="w-full flex justify-between mt-3 bg-blue-400 px-3 py-4 rounded-lg">
        <h3>Sandipan</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div>
      <div className="w-full flex justify-between mt-3 bg-yellow-400 px-3 py-4 rounded-lg">
        <h3>Sandipan</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div>
      <div className="w-full flex justify-between mt-3 bg-green-400 px-3 py-4 rounded-lg">
        <h3>Sandipan</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div>
      <div className="w-full flex justify-between mt-3 bg-violet-400 px-3 py-4 rounded-lg">
        <h3>Sandipan</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div></div>
    </div>
  );
};

export default AllTasks;
