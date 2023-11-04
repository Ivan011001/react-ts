import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ParentComponent({ children }: Props) {
  const onClickhandle = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    console.log("Клікнуто батьківський компонент");
  };

  return <div onClick={onClickhandle}>{children}</div>;
}
