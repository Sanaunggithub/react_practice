import mama from './assets/mama.jpg'
function Profile(){
    const handleClick = e => e.target.style.display = 'none'
    return(<img onClick={e => handleClick(e)} src={mama} width={200} height={200}></img>)
}

export default Profile