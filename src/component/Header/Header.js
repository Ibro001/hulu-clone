import {
    Home,
    LiveTv,
    PersonOutlineOutlined,
    Search,
    VideoLibrary,
    FlashOn
} from '@mui/icons-material'
import './Header.css'



const Header = () => {
  return (
    <div className='header'>
      <div className="header_icons">
        <div className='header_icon header_icon--active'>
          <Home />
          <p>Home</p>
        </div>
        <div className='header_icon'>
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className='header_icon'>
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className='header_icon'>
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className='header_icon'>
          <Search />
          <p>Search</p>
        </div>
        <div className='header_icon'>
          <PersonOutlineOutlined />
          <p>Account</p>
        </div>
      </div>
      <img 
        src='https://1000logos.net/wp-content/uploads/2021/04/Hulu-logo-500x281.png'
        alt='hulu_logo'
      />
    </div>
  )
}

export default Header
