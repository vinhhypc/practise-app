import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/login");
  return <Button className="m-20">Click here</Button>;
}
