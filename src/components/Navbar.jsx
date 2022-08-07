import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom';

const NavCont = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 15px;
	height: 70px;
	padding: 0 20px;
	background-color: #f7f8f8;
	@media (min-width: 1800px) {
		padding: 0 10rem;
	}
`;

const LogoWr = styled.div`

`

const Logo = styled.img`
`

const SearchLocWr = styled(Box)`
	flex: 1;
	height: 60%;
	border: 1px solid black;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	color: #002f34;
	background-color: white;
`;
const SearchLoc = styled.input`
    width:100%;
    height:100%;
    border:none;
    outline:none;
    font-size:1.2rem;
    background-color:white;
`
const SearchItemsWr = styled(Box)`
	flex: 2;
	height: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
`;

const InputWr = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-right:none;
    border-radius: 5px;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    padding: 5px;
`

const SearchItems = styled.input`
    width:100%;
    height:100%;
    border:none;
    outline:none;
    font-size:1.2rem;
`
const SearchIconWr = styled.div`
    height:100%;
    background-color:#002f34;
    color: white !important;
    border: 1px solid transparent;
    border-left:none;
    border-radius: 5px;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10px;
`
const BtnWr = styled.div`
    background-image:url(https://www.olx.com.eg/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg);
    height:48px;
    width:104px;
    display: flex;
    align-items: center;
    justify-content: center;
`
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
						src='https://www.olx.com.eg/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg'
						alt=''
					/>
				</LogoWr>
			</Link>
			<SearchLocWr sx={{}}>
				<Search sx={{ fontSize: "40px" }} />
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
			<span>العربية</span>
			<span>Login</span>
			<BtnWr>
				<Link to="/sell">
					<Button>+ SELL</Button>
				</Link>
			</BtnWr>
		</NavCont>
	);
}

export default Navbar