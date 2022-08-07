import styled from "@emotion/styled";
import {  Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Cont = styled.div`
	color: black;
	display: flex;
	padding: 2rem 10rem;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	@media only screen and (max-width: 390px) {
		flex-direction: column;
	} ;
`;

const Left = styled.div`
	flex:1;
`
const Image = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
`;

const Right = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media only screen and (max-width: 390px) {
		flex-direction: column;
	} ;
`;

const Upper = styled.div`
    padding:0 1rem;
    margin-top: 1rem;
`
const Lower = styled.div`

`
const FollowTxt = styled.h3`
    
`
const SocialIconsWr = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    color:black;
	color:black;
`;

const AppsWr = styled.div`
	display: flex;
`;
const IconWr = styled.div`
	width: 110px;
	height: 40px;
	margin: 20px 10px;
	flex: 1;
`;
const AppIcon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: scale-down;
`;


const Footer = () => {
	return (
		<Cont>
			<Left>
				<Image src='https://pps.whatsapp.net/v/t61.24694-24/292196186_164264006110830_6725763650638479743_n.jpg?ccb=11-4&oh=01_AVwbQ25Olq47PY1EoxPzG9MHD6PX3oWKsZv4OsU3jRDPXw&oe=63003607' />
			</Left>
			<Right>
				<Upper>
					<FollowTxt>FOLLOW US ON</FollowTxt>
					<SocialIconsWr>
						<SocialIcon>
							<Facebook />
						</SocialIcon>
						<SocialIcon>
							<Twitter />
						</SocialIcon>
						<SocialIcon>
							<Instagram />
						</SocialIcon>
						<SocialIcon>
							<YouTube />
						</SocialIcon>
					</SocialIconsWr>
				</Upper>
				<Lower>
					<AppsWr>
						<IconWr>
							<AppIcon src='https://www.olx.com.eg/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg' />
						</IconWr>
						<IconWr>
							<AppIcon src='https://www.olx.com.eg/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg' />
						</IconWr>
						<IconWr>
							<AppIcon src='https://www.olx.com.eg/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg' />
						</IconWr>
					</AppsWr>
				</Lower>
			</Right>
		</Cont>
	);
};

export default Footer;
