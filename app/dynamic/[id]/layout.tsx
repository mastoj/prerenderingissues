import React, { PropsWithChildren } from "react";

const LoadingPage = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-[90%] bg-blue-900 text-white p-4 rounded-lg mb-4 flex items-center justify-center">
        Welcome to the post detail page!
      </div>
      {children}
    </div>
  );
};

export default LoadingPage;
