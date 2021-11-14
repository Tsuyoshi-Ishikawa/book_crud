import LinkBtn from "../../atoms/LinkBtn/main";

const Header = () => {
  return (
    <div className="flex">
      <LinkBtn buttonType="button" buttonText="ホーム" pagePath="/" />
      <LinkBtn buttonType="button" buttonText="一覧" pagePath="/books"/>
    </div>
  )
}

export default Header
