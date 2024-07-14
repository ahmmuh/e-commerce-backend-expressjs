import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ange målmappen för sparade bilder
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Ange filnamnet (till exempel: timestamp + originalfilnamn)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: storage });

export { storage, upload };
