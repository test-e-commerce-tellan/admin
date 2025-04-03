import { CSSProperties } from "react";
import { TextPrimary } from "./Colors";

export const DataTableStyle: CSSProperties = {
  minWidth: "10rem",
  fontSize: "0.875rem",
};

export const TableHeaderStyle: CSSProperties = {
  fontWeight: "normal",
  fontSize: ".75rem",
  color: TextPrimary,
};

export const ColumnWidthStyle: {
  small: CSSProperties;
  medium: CSSProperties;
  large: CSSProperties;
} = {
  small: { width: "3rem" },
  medium: { width: "10rem" },
  large: { width: "20rem" },
};
