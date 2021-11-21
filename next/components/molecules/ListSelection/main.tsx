import { useRouter } from "next/router";

type Props = {
  title: string;
  firstName: string;
  lastName: string;
  href: string;
}

const ListSelection = ({ title, firstName, lastName, href }: Props) => {
  const router = useRouter();
  const moveDetail = () => {
    router.push(href);
  }

  return (
    <div onClick={moveDetail}>
      <div>{title}</div>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  )
}

export default ListSelection
