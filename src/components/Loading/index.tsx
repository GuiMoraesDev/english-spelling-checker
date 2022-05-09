import React, { HTMLAttributes } from "react";
import { FaRegTimesCircle, FaSpinner } from "react-icons/fa";

import useLoading, { LoadingStates } from "hooks/useLoading";
import * as Styled from "./styles";

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  status: LoadingStates;
  dimension?: "sm" | "md" | "lg";
}

const Loading = ({
  status,
  dimension = "md",
  ...props
}: LoadingProps): JSX.Element | null => {
  if (status === "loading") {
    return (
      <Styled.LoadingComponent
        {...props}
        status={status}
        dimension={dimension}
        shouldRotate
      >
        <FaSpinner />
      </Styled.LoadingComponent>
    );
  }

  if (status === "error") {
    return (
      <Styled.LoadingComponent {...props} status={status} dimension={dimension}>
        <FaRegTimesCircle />
      </Styled.LoadingComponent>
    );
  }

  return null;
};

export type { LoadingStates };

export { Loading, useLoading };
