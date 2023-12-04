import {useSelector} from "react-redux";
import ClassicLayout from "@/page/Layout/ClassicLayout";
import LandscapeLayout from "@/page/Layout/LandscapeLayout";
import {selectTopHeader} from "@/store/topHeader/selectors";

export default () => {
  const {pageConfig} = useSelector(selectTopHeader);
  const {layoutMode} = pageConfig ?? {};
  return (
    <>
      {layoutMode === "classicLayout" && <ClassicLayout/>}
      {layoutMode === "landscapeLayout" && <LandscapeLayout/>}
    </>
  );
};
