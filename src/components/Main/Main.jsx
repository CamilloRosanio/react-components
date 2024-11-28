import MyCard from "../MyCard/MyCard.jsx"

function Main() {

    return (
        <>
            <main>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row col-3 g-4">
                            <MyCard />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main