import './style.css'


function Profile() {



    return (
        <div className='wrapper'>
            <img className='profile-image' src="/images/profile.jpg"/>
            <div className='profile-content'>
                <div className='profile-item'>Ho va ten: Nguyen Van A</div>
                <div className='profile-item'>Gioi tinh: Nam</div>
                <div className='profile-item'>Dia chi: Ho Chi Minh</div>
            </div>
        </div>
    )
}

export default Profile