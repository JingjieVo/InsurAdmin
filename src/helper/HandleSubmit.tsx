export const handleSubmit = (e: any, editorsData?: Record<string, string>) => {
  e.preventDefault(); // Ngăn chặn load lại trang

  const formData = new FormData(e.target); // Thu thập dữ liệu từ form

  // Thêm tất cả các giá trị của RichTextEditor vào formData
  for (const key in editorsData) {
    if (editorsData.hasOwnProperty(key)) {
      formData.append(key, editorsData[key]);
    }
  }

  const data = Object.fromEntries(formData.entries()); // Chuyển thành object

  console.log(data); // Gửi object chứa các giá trị từ form
  // Thực hiện thêm logic gửi dữ liệu ở đây, như gọi API
};
