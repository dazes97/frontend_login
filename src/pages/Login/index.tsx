import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import Paper from "@mui/material/Paper";
const Login = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };
  const gridImageLeftStyles = {
    display: {
      xs: "none",
      md: "block",
    },
  };
  const imageStyles = { width: "100%", height: "70vh" };

  const onSubmitForm = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <CssBaseline />
      <Box sx={containerStyles}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
        >
          <Grid item xs={12} md={5} sx={gridImageLeftStyles}>
            <img src="/img/login.svg" style={imageStyles} />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ px: { xs: "10vw", md: "12vw", lg: "12vw" } }}
          >
            <Typography variant="h5" sx={{ fontWeight: "600", mb: 2 }}>
              Sign In to Dsoft
            </Typography>
            <Paper variant="outlined">
              <Button
                size="large"
                fullWidth
                startIcon={<FcGoogle />}
                sx={{ color: "black", textTransform: "none", py: 1.5 }}
              >
                Sign in with Google
              </Button>
            </Paper>
            <Box sx={{ textAlign: "center", my: 3 }}>
              <Typography variant="body2">Or sign in with email</Typography>
            </Box>
            <Box component="form" noValidate onSubmit={(e) => onSubmitForm(e)}>
              <Typography sx={{ fontWeight: 600 }}>
                Username or Email
              </Typography>
              <TextField
                name="email"
                autoComplete="email"
                id="email"
                type="email"
                margin="dense"
                size="small"
                required
                fullWidth
              />
              <Typography sx={{ fontWeight: 600 }}>Password</Typography>
              <TextField
                name="password"
                autoComplete="password"
                id="password"
                type="password"
                margin="dense"
                size="small"
                required
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ textTransform: "none", my: 2, borderRadius: 2, py: 1.5 }}
              >
                Sign In
              </Button>
              <Typography variant="subtitle2">
                Don't have an account? <a href="#">Sign up</a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Login;
