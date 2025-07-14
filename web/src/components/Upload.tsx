import upload from "../assets/upload.svg";

type UploadProps = React.ComponentProps<"input"> & {
  filename?: string | null;
};

export function Upload({ filename = null, ...rest }: UploadProps) {
  return (
    <div className="upload">
      <legend>Upload a file</legend>
      <div>
        <input type="file" id="upload" {...rest} />
        <span>{filename ?? "Select a file"}</span>
        <label htmlFor="upload">
          <img src={upload} alt="upload icon" />
        </label>
      </div>
    </div>
  );
}
