import { useState, useEffect } from "react";

const UseAbsoluteHeight = (refAbsolute) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // https://dev.to/joepurnell1/programmatically-positioning-elements-with-react-hooks-aef
    function updateHeight() {
      const newHeight =
        refAbsolute.current?.getBoundingClientRect().top +
        refAbsolute.current?.getBoundingClientRect().height;
      if (typeof newHeight !== "number") return null;
      setHeight(newHeight);
      console.log('top ', refAbsolute.current?.getBoundingClientRect().top);
      console.log('height', refAbsolute.current?.getBoundingClientRect().height);
    }
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, [refAbsolute.current]);
  return height;
};

export default UseAbsoluteHeight;
