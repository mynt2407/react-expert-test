import StorageChangeForm from "../common/storage/StorageChangeForm";
import useLocalStorage from "../hook/useLocalStorage";
import styles from "../css/modal.module.css"
import SubscriptionComponent from "../common/storage/SubscriptionComponent";

const Exercise1 = () => {
    return (
        <div className={styles.marginModal}>
            <h2 style={{ color: "red" }}>Exercise 1</h2>
            <StorageChangeForm />
            <SubscriptionComponent/>
        </div>
    )
}
export default Exercise1;