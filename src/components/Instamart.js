import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  console.log(isVisible, setIsVisible);
  return (
    <div className="border border-zinc-950">
      <h1 className="text-2xl">{title}</h1>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <Section
        title={"About Instamart"}
        description={"Description1"}
        isVisible={visibleSection == "about"}
        setIsVisible={() => {
          setVisibleSection("about");
        }}
      />
      <Section
        title={"contact"}
        description={"description2"}
        isVisible={visibleSection == "contact"}
        setIsVisible={() => {
          setVisibleSection("contact");
        }}
      />
    </>
  );
};

export default Instamart;
