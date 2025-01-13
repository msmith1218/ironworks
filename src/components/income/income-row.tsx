import styles from "./income-row.module.scss";

type InputRowProps = {
  index: number;
  incomeAmount: string;
};
const IncomeRow = (props: InputRowProps) => {
  return (
    <div className={styles.incomeRow}>
      <div key={props.index} className={styles.gridColumn}>
        {props.incomeAmount}
      </div>
    </div>
  );
};

export default IncomeRow;
