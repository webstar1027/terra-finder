import { Card, CardContent, CardHeader, Divider, SxProps } from "@mui/material";
import React, { FunctionComponent } from "react";

interface Props {
  children?: React.ReactNode;
  title: string;
  sx?: SxProps;
}

const Form: FunctionComponent<Props> = ({ children, title, sx }) => {
  return (
    <Card elevation={7} sx={sx}>
      <CardHeader
        titleTypographyProps={{ variant: "h6" }}
        title={title}
        sx={{ backgroundColor: "secondary.light" }}
      />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Form;
