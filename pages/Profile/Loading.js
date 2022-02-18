import styles from '../../styles/Home.module.css';
import { CircularProgress } from '@material-ui/core';

export default function Loading() {

return (
    <div className={styles.Loading}>
        <CircularProgress />
    </div>
)
}
