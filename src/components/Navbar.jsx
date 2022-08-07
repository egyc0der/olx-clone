import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom';

const NavCont = styled(Box)`
	position: sticky;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	gap: 15px;
	height: 85px;
	color: white;
	padding: 0 20px;
	z-index: 999999;
	background-color: #002b5b;
	@media (min-width: 1800px) {
		padding: 0 10rem;
	}
`;

const LogoWr = styled.div`
	width:70px;
	height: 70px;
	

`

const Logo = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
const Span = styled.span`
	@media only screen and (max-width: 390px) {
		display: none;
	}
`;
const SearchLocWr = styled(Box)`
	flex: 1;
	height: 60%;
	border: 1px solid black;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	color:white;
	padding: 5px;
	color: #002f34;
	background-color: #2B4865;
	@media only screen and (max-width: 390px) {
		display: none;
	}
`;
const SearchLoc = styled.input`
    width:100%;
    height:100%;
    border:none;
    outline:none;
    font-size:1.2rem;
	color:white;
    background-color:#2B4865;
`
const SearchItemsWr = styled(Box)`
	flex: 2;
	height: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2b4865;
`;

const InputWr = styled.div`
    width: 100%;
    height: 100%;
    border: 0.25px solid black;
    border-right:none;
    border-radius: 5px;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    padding: 5px;
`

const SearchItems = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	font-size: 1.2rem;
	color: white;
	background-color: #2b4865; ;
`;
const SearchIconWr = styled.div`
	height: 100%;
	background-color: #2b4865;
	color: white !important;
	border: 1px solid transparent;
	border-left: none;
	border-radius: 5px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
`;
const BtnWr = styled.div`
	background-image: url(https://www.olx.com.eg/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg);
	height: 48px;
	width: 104px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 390px) {
		position:fixed;
		top:96%;
		left:50%;
		transform:translate(-50%,-50%)
	}
`;
const Button = styled.button`
    background:none;
    border:none;
    font-weight:700;
    cursor: pointer;
`
const Navbar = () => {
  return (
		<NavCont>
			<Link to='/'>
				<LogoWr>
					<Logo
						src='https://pps.whatsapp.net/v/t61.24694-24/292196186_164264006110830_6725763650638479743_n.jpg?ccb=11-4&oh=01_AVwbQ25Olq47PY1EoxPzG9MHD6PX3oWKsZv4OsU3jRDPXw&oe=63003607'
						alt=''
					/>
				</LogoWr>
			</Link>
			<SearchLocWr sx={{}}>
				<Search sx={{ fontSize: "40px",color:"white" }} />
				<SearchLoc placeholder='' />
			</SearchLocWr>
			<SearchItemsWr>
				<InputWr>
					<SearchItems placeholder='Find Cars,Mobile Phones and more...' />
				</InputWr>
				<SearchIconWr>
					<Search sx={{ fontSize: "30px" }} />
				</SearchIconWr>
			</SearchItemsWr>
			<Span>العربية</Span>
			<Span>Login</Span>
			<BtnWr>
				<Link to='/sell'>
					<Button>+ SELL</Button>
				</Link>
			</BtnWr>
		</NavCont>
	);
}

export default Navbar