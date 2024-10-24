export const handleSubmit = (e : any) => {
    e.preventDefault(); // Ngăn chặn load lại trang

    const formData = new FormData(e.target); // Thu thập dữ liệu từ form
    const data = Object.fromEntries(formData.entries()); // Chuyển thành object

    console.log(data); // Gửi object chứa các giá trị từ form
    // Bạn có thể thực hiện thêm logic gửi dữ liệu ở đây, như gọi API
  };