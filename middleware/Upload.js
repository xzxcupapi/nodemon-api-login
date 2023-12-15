const multer = require("multer");

// Konfigurasi storage untuk menyimpan file
const storage = multer.memoryStorage(); // Menyimpan file dalam bentuk buffer di memori

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Batasan ukuran file (5 MB)
  },
  fileFilter: (req, file, cb) => {
    // Fungsi untuk menolak file yang bukan gambar
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("File harus berupa gambar"), false);
    }
  },
});

module.exports = upload;
