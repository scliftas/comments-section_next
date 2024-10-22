import type { FC } from "react";

type Props = {
  className?: string;
  title: string;
};

const MinusIcon: FC<Props> = (props) => {
  const { className = "", title } = props;

  return (
    <svg
      className={className}
      width="11"
      height="11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
    </svg>
  );
};

export default MinusIcon;
