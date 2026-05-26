document.getElementById("gift-box").addEventListener("click", function () {
  // 1. Ẩn hộp quà và hướng dẫn
  this.style.display = "none";
  document.getElementById("instruction").style.display = "none";

  // 2. Hiện phần chứa video và lưu ý
  const content = document.getElementById("revealed-content");
  content.classList.remove("hidden");

  // 3. Tự động kích hoạt video (Phải có &mute=1 để trình duyệt cho phép tự chạy)
  const video = document.getElementById("youtube-video");
  // Đảm bảo src chứa tham số autoplay=1 và mute=1
  if (video.src.indexOf("autoplay=1") === -1) {
    video.src += "&autoplay=1&mute=1";
  }

  // 4. Tạo mưa rơi liên tục mỗi 600ms
  setInterval(function () {
    createRainDrop();
  }, 600);
});

function createRainDrop() {
  let el = document.createElement("div");
  el.className = "emoji";

  // Chọn ngẫu nhiên 10 điểm hoặc tim
  if (Math.random() > 0.5) {
    el.innerHTML = "10 điểm";
    el.classList.add("text-10"); // Class này trong CSS set color: red
  } else {
    el.innerHTML = "❤️";
    el.classList.add("heart"); // Class này trong CSS set color: red
  }

  // Vị trí rơi ngẫu nhiên trên màn hình
  el.style.left = Math.random() * 100 + "vw";

  // Tốc độ rơi ngẫu nhiên
  el.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(el);

  // Xóa phần tử khỏi bộ nhớ sau khi rơi xong để web không bị chậm
  setTimeout(() => {
    el.remove();
  }, 5000);
}
