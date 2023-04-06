import styles from "./Cart.module.scss";
import CartIcon from '../../Icons/Cart'

export default function Cart() {
  return (
    <>
      <div className={styles.container}>
        <CartIcon />
        <p>Cart (0)</p>
      </div>
    </>
  );
}
