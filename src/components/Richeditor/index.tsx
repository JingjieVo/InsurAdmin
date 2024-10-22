import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS của React Quill để hiển thị đúng

const RichTextEditor: React.FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="min-h-[200px] "
      />
      <button onClick={() => {
        console.log(value)
      }}>Submit</button>
    </div>
  );
};

export default RichTextEditor;