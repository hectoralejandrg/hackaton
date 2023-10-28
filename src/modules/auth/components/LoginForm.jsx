import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const LoginForm = () => {
  const { getFieldProps, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Box component="form" noValidate>
      <Typography fontSize={30} fontWeight={"bold"} marginBottom={3} >Bienvenido!</Typography>
      <Grid container gap={3}>
        <TextField label="Email" fullWidth {...getFieldProps("email")} />
        <TextField
          label="Contraseña"
          fullWidth
          {...getFieldProps("password")}
        />
        <Button type="submit" variant="contained">
          Ingresar
        </Button>
      </Grid>
    </Box>
  );
};

export default LoginForm;
