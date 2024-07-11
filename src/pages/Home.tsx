import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Modal from "./Modal";

const Home: React.FC = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  console.log("🚀 ~ isPreview:", isPreview);

  const handlePreview = () => {
    setEditorContent(document.getElementById("editing-area")?.innerHTML || "");
    setIsPreview(!isPreview);
  };
  return (
    <div
      className="container-main"
      style={{
        display: "flex",
        paddingTop: "35px",
        backgroundColor: "#F2F2F2",
        height: "96vh",
        overflow: "auto",
      }}
    >
      <div>
        <Sidebar onPreview={handlePreview} />
      </div>
      <div>
        <Editor isPreview={false} />
      </div>
      <div>
        <Modal
          show={isPreview}
          onClose={handlePreview}
          content={editorContent}
        />
      </div>
    </div>

    // <div className="grid-cols-4 gap-3 border-2 border-[#DBDBDD] p-3 rounded flex font-CircularTTBook mt-4 w-[80%] h-[89%] overflow-auto">
    //   <Editor />
    //   {/* <div className="flex">
    //     <Sidebar />
    //   </div> */}
    // </div>

    // <div className="col-span-12 flex w-min">
    //   <div className="col-1">
    //     <Sidebar />
    //     {/* <div className="col-1 mt-[30px] w-[100%] h-[70vh]"> */}
    //     <div className="ml-1 col-4">
    //       <Editor />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
