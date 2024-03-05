import * as React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Checkbox from "@mui/material/Checkbox";

function RenderCheckBox(props: { value: boolean, label: string }) {
  const [checked, setChecked] = React.useState(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      label={props.label}
      color="primary"
      inputProps={{ 'aria-label': props.label }}
    />
  );
}

const columns: GridColDef[] = [
  { field: "id", headerName: "Member ID", width: 100, align: "center" },
  { field: "col2", headerName: "Email", width: 180 },
  { field: "col3", headerName: "Name", width: 180 },
  {
    field: "checked",
    headerName: "UAT",
    width: 100,
    renderCell: (params) => <RenderCheckBox {...params} label="UAT" />
  },
  {
    field: "checked1",
    headerName: "SRS",
    width: 100,
    renderCell: (params) => <RenderCheckBox {...params} label="SRS" />
  },
  {
    field: "checked2",
    headerName: "SDS",
    width: 100,
    renderCell: (params) => <RenderCheckBox {...params} label="SDS" />
  },
  {
    field: "checked3",
    headerName: "BRD",
    width: 100,
    renderCell: (params) => <RenderCheckBox {...params} label="BRD" />
  },
  
];

const rows = [
  { id: 1, col2: "sanchita@gmail.com", col3: "Sumaya Sanchita", checked: true },
  { id: 2, col2: "trisha@gmail.com", col3: "Farheen Mahjarin Trisha", checked: false },
  { id: 3, col2: "faria42@gmail.com", col3: "Faria Islam", checked: false }
];

export default function AddSoftwareDatagrid() {
  return (
    <div style={{ height: 614, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
