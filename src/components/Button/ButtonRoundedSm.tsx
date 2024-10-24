import { ButtonProps } from "./type";

export default function ButtonRoundedSm(props : ButtonProps) {
  return (
    <button onClick={props.onClick} className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
      {props.title}
    </button>
  );
}
