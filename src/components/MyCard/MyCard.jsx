import styles from './MyCard.module.css';

function MyCard() {

    return (
        <>
            <div className="col">
                <div className={styles.MyCard}>
                    <div>
                        <img src="src\assets\img-example.jpeg" alt="" className='img-fluid' />
                        {/* <img src="../../assets/img-example.jpeg" alt="" className='img-fluid' /> */}
                    </div>
                    <div className={styles.contentContainer}>
                        <h3 className='h5'>Post title</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptate quod dolorem eius.
                        </p>
                        <button className='btn btn-warning' href='#'>
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCard