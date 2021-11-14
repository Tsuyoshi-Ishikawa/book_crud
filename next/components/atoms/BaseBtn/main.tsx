import { buttonType } from "../../../types/btn";

type Props = {
  buttonType: buttonType;
  buttonText: string;
}

const BaseBtn = ({ buttonType, buttonText}: Props) => {
  return (
    <>
      <button type={ buttonType }>{ buttonText }</button>
    </>
  )
}

export default BaseBtn
