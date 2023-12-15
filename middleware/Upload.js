import multer from "multer";

// Konfigurasi Multer untuk menyimpan file gambar di sistem file server
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Menentukan folder penyimpanan file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Menentukan nama file
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Contoh: batasan ukuran file 5 MB
  },
});

export default upload;
