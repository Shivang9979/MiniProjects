import Card from './Card';
function Tours({ tours, removeTour }) {
    return (
        <div className='container'>
            <div>
                <h2>Choose Tours</h2>
            </div>
            <div className='tour'>{
                tours.map((tour) => {
                    return <Card {...tour} removeTour={removeTour}></Card>
                }

                )}
            </div>
        </div>)
}
export default Tours;