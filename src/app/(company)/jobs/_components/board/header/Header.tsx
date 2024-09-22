import Actions from "../dropdown-menu/Actions";
import More from "../dropdown-menu/More";

const Header = ({
    columnTitle,
    cardsLength,
  }: {
    columnTitle: string;
    cardsLength: number;
  }) => {
    return (
      <div className="flex justify-between mx-2">
        <div className="flex items-center px-1 gap-2">
          <p className="font-semibold text-sm">{columnTitle}</p>
          <p className="bg-secondary p-1 px-2 rounded-sm font-bold text-xs">
            {cardsLength}
          </p>
        </div>
  
        <div className="space-x-3">
          <Actions />
          <More />
        </div>
      </div>
    );
};
  
export default Header;