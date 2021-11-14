import Link from 'next/link';
import { buttonType } from "../../../types/btn";

type Props = {
  buttonType: buttonType;
  buttonText: string;
  pagePath: string;
}

const LinkBtn = ({ buttonType, buttonText, pagePath }: Props) => {
  return (
    <>
      <Link href={ pagePath }>
        <a href="">
          <button type={ buttonType }>{ buttonText }</button>
        </a>
      </Link>
    </>
  )
}

export default LinkBtn
