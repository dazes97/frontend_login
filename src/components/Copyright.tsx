import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost">
        Dsoft Technologies
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};
export default Copyright;
