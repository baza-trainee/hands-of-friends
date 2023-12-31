import clsx from "clsx";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "py-4 font-body text-white text-xl leading-8 font-normal  tracking-[0.003em] rounded-md border-transparent hover:bg-transparent  hover:border-solid ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
