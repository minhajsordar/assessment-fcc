import { UserAgent } from "@/views/userAgent";
import {getUserAgent} from "@/actions/getUserAgent"

const UserAgentRoot = async() => {
  const useragent = await getUserAgent()
  return <UserAgent useragent={useragent} />;
};

export default UserAgentRoot;
