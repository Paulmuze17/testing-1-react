// import styles from "./index.module.scss";

interface ILayoutWrapper {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

function LayoutWrapper({children, className}:ILayoutWrapper) {

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default LayoutWrapper
