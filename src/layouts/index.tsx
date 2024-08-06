import { AppShell } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const LayoutShell = ({ children }: Props) => {
  const navigate = useNavigate();

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className="flex items-center justify-center">
        <span
          className="text-2xl text-black font-extrabold cursor-pointer"
          onClick={() => navigate("/")}>
          IMDB
        </span>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default LayoutShell;
