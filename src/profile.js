import './style.css'

function Profile() {
    return (
        <div className='wrapper'>
            <img className='profile-image' src='/profile.jpg'/>
            <div className='wrapper-content'>
                <div className='profile-content'>
                    <div className='profile-item'>Họ và tên: </div>
                    <div className='profile-info'>Vo Thinh Chuan </div>
                </div>
                <div className='profile-content'>
                    <div className='profile-item'>Địa chỉ: </div>
                    <div className='profile-info'>Tân Phú - Hồ Chí Minh </div>
                </div>
                <div className='profile-content'>
                    <div className='profile-item'>SDT: </div>
                    <div className='profile-info'>0989xxxxx9 </div>
                </div>
            </div>
       </div>
    )
}

export default Profile