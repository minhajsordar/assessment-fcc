import { Products } from "@/views/products";
import React from "react";

export default function ProductsRoot() {
  return <React.Suspense><Products /></React.Suspense>;
}
