import Grid from "@mui/material/Grid";
import Template from "../template";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const MainPage = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];
  return (
    <Template>
      <Grid container spacing={3} sx={{ p: 3 }}>
        <Grid item xs={12}>
          <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography>DASHBOARD</Typography>
        </Grid>
      </Grid>
    </Template>
  );
};

export default MainPage;
