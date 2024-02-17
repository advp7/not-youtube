import React, { createContext, useState } from "react";

export const VideoContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <VideoContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};
