import styled from "@emotion/styled";
import {  Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Cont = styled.div`
	background-color: rgba(0, 47, 52, 0.2);
	display: flex;
	@media (min-width: 1800px) {
		padding: 0 10rem;
	}
`;

const LinksWr = styled.div`
    flex:1;
    width:2rem;
    height:150px;
    display: flex;
    flex-direction:column;
`;


const UL = styled.ul`
	display: grid;
	grid-template-rows: repeat(5, min-content);
	grid-auto-flow: column;
	width: 230px;
	margin-bottom: 1rem;
`;

const ListTitle = styled.div`
	font-size: 0.9rem;
	font-weight: 700;
	margin-bottom: 0.9rem;
    margin-left:2.5rem;
    margin-top:0.5rem;
`;

const LI = styled.li`
	font-size: 0.8rem;
	list-style: none;
	margin-bottom: 0.3rem;
`;
const Right = styled.div`
	flex: 2;
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
			<LinksWr>
				<ListTitle>ABOUT US</ListTitle>
				<UL>
					<LI>About EMPG</LI>
					<LI>Careers</LI>
					<LI>Contact Us</LI>
					<LI>OLX for Businesses</LI>
				</UL>
			</LinksWr>
			<LinksWr>
				<ListTitle>OLX</ListTitle>
				<UL>
					<LI>Help</LI>
					<LI>Sitemap</LI>
					<LI>Terms of use</LI>
					<LI>Privacy Policy</LI>
				</UL>
			</LinksWr>
			<LinksWr>
				<ListTitle>COUNTRIES</ListTitle>
				<UL>
					<LI>Bahrain</LI>
					<LI>Jordan</LI>
					<LI>Kuwait</LI>
					<LI>Lebanon</LI>
					<LI>Oman</LI>
					<LI>Pakistan</LI>
					<LI>Qatar</LI>
					<LI>Saudi Arabia</LI>
					<LI>UAE</LI>
				</UL>
			</LinksWr>
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
