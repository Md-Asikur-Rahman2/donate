import { useEffect, useState } from "react";

function TimeDifferenceUpdater() {
  const initialData = [{ time: "2023-08-25T10:00:00Z" }];

  const [data, setData] = useState(initialData);

  const getTimeDifference = (timestamp) => {
    const currentTime = new Date();
    const difference = new Date(currentTime - new Date(timestamp));
    const days = difference.getUTCDate() - 1;
    const hours = difference.getUTCHours();
    const minutes = difference.getUTCMinutes();
    const seconds = difference.getUTCSeconds();

    return (
      <>
        <div className="flex items-center justify-center space-x-3">
          <div className=" text-black text-center font-xl font-semibold">
            Days
            <br />
            {days}
          </div>

          <div className=" text-black text-center font-xl font-semibold">
            Hours
            <br />
            {hours}
          </div>
          <div className=" text-black text-center font-xl font-semibold">
            Minutes
            <br />
            {minutes}
          </div>
          <div className=" text-black text-center font-xl font-semibold">
            Seconds
            <br />
            {seconds}
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedData = data.map((item) => {
        const timeDifference = getTimeDifference(item.time);
        return { ...item, formattedTimeDifference: timeDifference };
      });

      setData(updatedData);
    }, 1000); // 2 seconds delay

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, [data]);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.formattedTimeDifference}</div>
      ))}
    </div>
  );
}

export default TimeDifferenceUpdater;
