import React, { useState, useEffect } from "react";
import axios from "axios";

interface Page {
  _id: string;
  name: string;
  description: string;
  content: string;
}

const Preview: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      const response = await axios.get("http://localhost:5000/api/pages");
      setPages(response.data);
    };
    fetchPages();
  }, []);

  return (
    <div>
      {pages.map((page) => (
        <div
          key={page._id}
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      ))}
    </div>
  );
};

export default Preview;
