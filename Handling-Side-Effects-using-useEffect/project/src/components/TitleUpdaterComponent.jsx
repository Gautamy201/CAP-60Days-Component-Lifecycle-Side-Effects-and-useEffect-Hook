import React, { useEffect, useState } from "react";

const TitleUpdaterComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Update Document Title</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default TitleUpdaterComponent;
