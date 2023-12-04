import SystemSettings from "@/page/Layout/components/SettingsDrawer";
import FullScreenIcon from "@/page/Layout/components/FullScreenIcon";
import UserAvatar from "@/page/Layout/components/UserAvatar";

const HeaderRight = () => {
  return (
    <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
      <FullScreenIcon/>
      <SystemSettings/>
      <UserAvatar/>
    </div>
  );

};
export default HeaderRight;