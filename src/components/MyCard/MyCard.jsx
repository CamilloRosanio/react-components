import styles from './MyCard.module.css';

function MyCard() {

    return (
        <>
            <div className="col">
                <div className={styles.MyCard}>
                    <div className={styles.imgContainer}>
                        <img className="" src="../../assets/img-example.jpg" alt="" />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3 className='h5'>Post title</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptate quod dolorem eius.
                        </p>
                        <button className='btn btn-primary'>
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCard