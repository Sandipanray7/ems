import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex justify-between items-center p-4 gap-5 bg-transparent screen">
      <div className=" w-[25%] px-5 py-7 mt-10 bg-blue-400 rounded-lg">
        <h2 className="text-3xl p-1 font-semibold">1</h2>
        <h3 className="text-l font-medium">New Tasks</h3>
      </div>
      <div className=" w-[25%] px-5 py-7 mt-10 bg-green-400 rounded-lg">
        <h2 className="text-3xl p-1 font-semibold">2</h2>
        <h3 className="text-l font-medium">Accepted Tasks</h3>
      </div>
      <div className=" w-[25%] px-5 py-7 mt-10 bg-yellow-400 rounded-lg">
        <h2 className="text-3xl p-1 font-semibold">4</h2>
        <h3 className="text-l font-medium">Completed Tasks</h3>
      </div>
      <div className=" w-[25%] px-5 py-7 mt-10 bg-red-500 rounded-lg">
        <h2 className="text-3xl p-1 font-semibold">0</h2>
        <h3 className="text-l font-medium">Failed Tasks </h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
