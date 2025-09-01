import mama from './assets/mama.jpg'

function Card(){
    return(
        <div className="card">
            <img src={mama} className='card-image' alt="my mama" height={200} width={200}/>
            <h2 className='card-title'>Mama</h2>
            <p className='card-text'>Mama is an attractive, smart, beautiful, kind woman. She's the love of my life and the soul of my heart.</p>
        </div>
    )
}

export default Card