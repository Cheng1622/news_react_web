import styled from "styled-components";
import {AuthControl} from "@/components/Auth";
import {useSelector} from "react-redux";
import {selectTopHeader} from "@/store/topHeader/selectors";
import {selectTheme} from "@/store/theme/selectors";
const Warp = styled.div<{ mode?: string, colorPrimary: string }>`
  width: ${props => props.mode === "horizontal" ? "200px" : false};
  display: flex;
  align-items: center;
  transition: padding .3s cubic-bezier(.645, .045, .355, 1);

  .logo {
    width: 100%;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    height: 48px;

    img {
      width: auto;
      height: 48px;
    }

    h1 {
      color: ${props => props.colorPrimary};
      font-weight: 600;
      font-size: 18px; 
      animation: slide-in 0.3s ease-in-out;
    }

    @keyframes slide-in {
      0% {
        opacity: 0;
      }
      80% {
        opacity: 0;

        100% {
          opacity: 1;
        }
      }
    }
`;

export const Logo = (props: { mode: string }) => {
  const {pageConfig, collapsed,} = useSelector(selectTopHeader);
  const {token: {colorPrimary}} = useSelector(selectTheme);
  const {layoutItems,layoutMode} = pageConfig ?? {};
  return (
    <AuthControl
      permissionControl={() => layoutItems?.includes("logo")}
    >
      <Warp {...props} colorPrimary={colorPrimary}>
        <div className={"logo"}>
          {(layoutMode === 'portraitLayout' || !collapsed) && <h1>新闻后台</h1>}
        </div>
      </Warp>
    </AuthControl>

  );
};

export default Logo;