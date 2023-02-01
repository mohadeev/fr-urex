import { IoImageOutline } from "@react-icons/all-files/io5/IoImageOutline";
import Style from "../../styles/modals/imges-uploader.module.css";
import React, { useState, useRef, useEffect } from "react";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import AxiosPostLogedOutFormData from "../../utils/AxiosPostLogedOutFormData";
import basedPostUrlRequestLogedIn from "../../utils/basedPostUrlRequestLogedIn";
import { IoCloudUploadOutline } from "@react-icons/all-files/io5/IoCloudUploadOutline";
import { images100Ruducer } from "../../redux/image-slice/imageSlice";

const ImgesUploader = () => {
  const Path = useRef(null);
  const [Uploaded, setUploaded] = useState(false);
  const Thumbnail = React.useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const Channels = useSelector((state: any) => state.ChannelSlice.allChannels);
  const videoData = useSelector((state: any) => state.VideoSlice.videoData);

  const readImageThumbnail = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      Path.current = event.target.files[0];

      handelSubmiteThumbnail();
    }
  };
  const handelSubmiteThumbnail = async () => {
    let formData = new FormData();
    if (Path.current) {
      formData.append("image", Path.current);
    }
    await AxiosPostLogedOutFormData(
      "/api/post/imges/upload-image",
      formData
    ).then(({ data }: any) => {
      console.log(data);
      const { file }: any = data;
      dispatch(images100Ruducer(file));
      //   if (Thumbnail.current) {
      //     Thumbnail.current.style.backgroundImage = `url(${
      //       process.env.NEXT_PUBLIC_BACK_END_URL +
      //       "/api/get/read/images/" +
      //       file.filename
      //     })`;
      //   }
      //   setUploaded(true);
    });
  };

  return (
    <div className={Style.container}>
      <div className={Style.drop_zone}>
        <label htmlFor="input_upload_image" className={Style.input_label}>
          <input
            id="input_upload_image"
            type="file"
            accept="image/png, image/gif, image/jpeg , image/jpg image/jfif image/svg image/webp"
            onChange={readImageThumbnail}
            className={Style.input_upload_image}
          />
          <IoCloudUploadOutline />
          select image
        </label>
      </div>
    </div>
  );
};

export default ImgesUploader;
