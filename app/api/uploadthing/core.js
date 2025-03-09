import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  categoryImageUploader: f({
    image: {
      maxFileSize: "1MB",
      maxFileCount: 1,
    },
  })
  .onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.ufsUrl, metadata);
    return { uploadedBy: "Luci" };
  }),
  bannerImageUploader: f({
    image: {
      maxFileSize: "1MB",
      maxFileCount: 1,
    },
  })
  .onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.ufsUrl, metadata);
    return { uploadedBy: "Luci" };
  }),
  storeLogoUploader: f({
    image: {
      maxFileSize: "1MB",
      maxFileCount: 1,
    },
  })
  .onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.ufsUrl, metadata);
    return { uploadedBy: "Luci" };
  }),
};
