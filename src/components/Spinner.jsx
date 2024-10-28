import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#e92633"
      loading={loading}
      cssOverride={override}
      size={200}
    />
  );
};
export default Spinner;
