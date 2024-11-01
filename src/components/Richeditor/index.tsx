import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS của React Quill để hiển thị đúng
import './quill-custom.css'; // Custom CSS

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }], // Font and Size
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // Color and Background color
    ['bold', 'italic', 'underline', 'strike'], // Bold, Italic, Underline, Strikethrough
    ['blockquote', 'code-block'], // Blockquote and Code Block
    [{ script: 'sub' }, { script: 'super' }], // Subscript / Superscript
    [{ list: 'ordered' }, { list: 'bullet' }], // Ordered List / Bullet List
    [{ align: [] }],
    ['link', 'image'], // Link and Image
    ['clean'], // Clear formatting
  ],
};

interface RichTextEditorProps {
  value: string; // Nhận giá trị từ component cha
  setValue: (value: string) => void; // Hàm để cập nhật giá trị từ component cha
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, setValue }) => {
  return (
    <div className="rich-editor-container">
      <ReactQuill
        theme="snow"
        value={value} // Gán giá trị từ props (component cha)
        onChange={setValue} // Gọi hàm cập nhật giá trị từ props (component cha)
        className="scrollable-editor"
        modules={modules}
      />
    </div>
  );
};

export default RichTextEditor;
