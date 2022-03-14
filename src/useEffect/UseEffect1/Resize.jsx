import { useEffect } from "react";

const Resize = () => {
  useEffect(() => {
    console.log("useEffect");
    const resizeDocumentTitle = () => {
      document.title = window.innerWidth;
    };
    window.addEventListener("resize", resizeDocumentTitle);

    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", resizeDocumentTitle);
    };
  }, []);

  return <div>Resize</div>;
};

export default Resize;
