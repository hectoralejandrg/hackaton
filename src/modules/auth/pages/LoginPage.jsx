import { Card, CardContent, styled } from "@mui/material";
import LoginForm from "../components/LoginForm";

const ContainerWrapper = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  //   [theme.breakpoints.down("md")]: {
  //     minHeight: "100vh",
  //   },
}));

const LoginPage = () => {
  return (
    <ContainerWrapper>
      <Card sx={{ minWidth: 375 }}>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </ContainerWrapper>
  );
};

export default LoginPage;
