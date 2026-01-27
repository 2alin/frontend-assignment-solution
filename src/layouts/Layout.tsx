import { type PropsWithChildren } from "react";
import logoPath from "../assets/app-logo.svg";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-dvh w-dvw flex-col overflow-hidden">
      <header className="flex h-12 items-center justify-center   py-2  text-3xl font-bold text-secondary-600">
        <h1 className="flex gap-2 items-center">
          <span>
            <img
              src={logoPath}
              alt="Brand logo: a test tube tilted that is half filled"
              className="w-6"
            />
          </span>
          <span>Biomarkers App</span>
          {/* following item is to align title text in the center */}
          <span className="w-6"></span>
        </h1>
      </header>
      <main className="flex flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
