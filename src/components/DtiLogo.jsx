/* eslint-disable react/prop-types */
import dtiLogo from "../assets/dtiLogo.png";
export default function DaffLogo(props) {
  return (
    <img
      style={{ margin: "0 auto", paddingTop: props.paddingTop }}
      width="400px"
      src={dtiLogo}
      alt="https://daffodil.family/dfamily/images/familylogo/new/dti.png"
    />
  );
}
