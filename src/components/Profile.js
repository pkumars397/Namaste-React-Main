import { useEffect, useState } from "react";
const Profile = (props, age) => {
  // state management in functional component
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
    const id = setInterval(() => {
      console.log("setTimeout in useEffect");
    }, 1000);
    return () => {
      clearInterval(id);
      console.log("return in useEffect");
    };
  });
  console.log("rendered");
  return (
    <div>
      <h1>
        Profile Name:{props.name} age:{props.age}
        <p>Count:{count}</p>
      </h1>
      <button onClick={() => setCount(1)}>change State</button>
    </div>
  );
};
export default Profile;
