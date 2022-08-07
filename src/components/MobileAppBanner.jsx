import styled from '@emotion/styled'

const Cont = styled.div`
	margin: 2rem 0;
	display: flex;
	background-color: rgba(0, 47, 52, 0.03);
	@media only screen and (max-width: 390px) {
		display: none;
	}
`;
const Left = styled.div`
    flex:1;
`

const Image = styled.img`
    
`

const Middle = styled.div`
	flex: 1;
    padding:2rem 0.1rem;
`;

const Try = styled.h1`
    font-size:38px;
    font-weight:700;
`

const Desc = styled.p`
	font-size: 18px;
    letter-spacing:1px;
`;

const Right = styled.div`
	margin: 2.5rem 0;
	flex: 1;
`;
const Get = styled.p`
    margin-left: 10px;
	font-size: 18px;
`;
const AppsWr = styled.div`
    display: flex;
`
const IconWr = styled.div`
	width: 110px;
	height: 40px;
	margin: 20px 10px;
	flex: 1;
`;
const AppIcon = styled.img`
    
    width:100%;
    height:100%;
    object-fit:scale-down;
`

const MobileAppBanner = () => {
  return (
		<Cont>
			<Left>
				<Image src='https://www.olx.com.eg/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp' />
			</Left>
			<Middle>
				<Try>TRY THE OLX APP</Try>
				<Desc>
					Buy, sell and find just about anything using the app on your mobile.
				</Desc>
			</Middle>
			<Right>
				<Get>GET YOUR APP TODAY</Get>
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
			</Right>
		</Cont>
	);
}

export default MobileAppBanner