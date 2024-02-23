import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "@/shared/components";

interface Props {
  children: React.ReactNode;
}

export const RoutesWithNotFound: FC<Props> = ({ children }) => {
  return (
    <Routes>
      {children}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
