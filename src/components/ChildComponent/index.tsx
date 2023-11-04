import { MouseEvent } from "react";

export default function ChildComponent() {
  const onClickHandle = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    console.log("Клікнуто дитячий компонент");
  };

  return (
    <button onClick={onClickHandle} type="button">
      ChildComponent
    </button>
  );
}
