import styled from "@emotion/styled";
import Item from "../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'


const Cont = styled.div`
	width: 100%;
	margin: 30px 0;
`;

const CatPath = styled.div`
	color: rgba(0, 47, 52, 0.64);
`;
const ItemCont = styled.div`
	margin-top: 20px;
	display: flex;
`;

const Left = styled.div`
	flex: 1.5;
`;

const ImageSliderWr = styled.div`
	width: 100%;
	border-radius: 5px;
	border: 0.5px solid black;
`;

const ImageSlider = styled.div`
	flex: 4;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 500px;
	background-color: black;
`;

const Image = styled.img`
	width: 80%;
	height: 100%;
`;

const Thumbs = styled.div`
	margin-top: 10px;
	overflow: hidden;
`;

const ThumbImage = styled.img`
	margin: 10px;
	width: 80px;
	height: 80px;
`;

const DetailsWr = styled.div`
	width: 100%;
	border-radius: 5px;
	margin-top: 10px;
	border: 0.5px solid black;
	padding: 15px 10px;
`;

const Details = styled.div``;

const Title = styled.h3``;

const DetailsCont = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;

const DetailItem = styled.div`
	flex-basis: 50%;
	display: flex;
	margin: 10px 0;
`;

const DetailTitle = styled.div`
	flex-basis: 50%;
`;

const DetailValue = styled.div`
	flex-basis: 50%;
`;

const Hr = styled.hr`
	width: 100%;
	margin-bottom: 10px;
`;

const Description = styled.div``;

const DescriptionText = styled.p`
	margin: 10px 0;
	text-align: justify;
`;

const RelatedAds = styled.div``;

const AdsCont = styled.div`
	display: flex;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-left: 15px;
`;

const Price = styled.div`
	width: 100%;
	border: 0.5px solid black;
	border-radius: 5px;
	display: flex;
	padding: 25px;
`;

const PriceLeft = styled.div`
	flex-basis: 80%;
	display: flex;
	flex-direction: column;
	gap: 5px;
	justify-content: space-between;
`;

const UnitePrice = styled.span`
	font-weight: 700;
	font-size: 40px;
`;
const Milage = styled.span`
	font-weight: 200;
	font-size: 20px;
`;
const Name = styled.span`
	font-weight: 200;
	font-size: 20px;
`;
const Location = styled.span`
	font-weight: 200;
	font-size: 20px;
`;
const PriceRight = styled.div`
	flex-basis: 20%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const IconsWr = styled.span`
	flex-basis: 50%;
	text-align: right;
`;

const PostTime = styled.span`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	text-align: right;
	font-weight: 200;
	font-size: 20px;
`;

const SellerDescription = styled.div`
	margin-top: 15px;
	width: 100%;
	border: 0.5px solid black;
	border-radius: 5px;
	display: flex;
	padding: 25px;
	flex-direction: column;
`;

const SellerDescr = styled.div`
	font-weight: 500;
	font-size: 25px;
`;
const SellerWr = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SellerData = styled.div`
	margin-left: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const AddTitle = styled.div`
	font-weight: 500;
	font-size: 20px;
`;
const MemberSince = styled.div`
	font-weight: 200;
	font-size: 20px;
`;
const Tele = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 5px;
`;

const Safety = styled.div`
	margin-top: 15px;
	width: 100%;
	border: 0.5px solid black;
	border-radius: 5px;
	display: flex;
	padding: 25px;
	flex-direction: column;
`;

const SafteyTitle = styled.div`
	font-weight: 500;
	font-size: 25px;
`;
const SafetyPoints = styled.ul`
	padding: 25px;
`;
const SafteyPoint = styled.li`
	margin: 10px 0;
`;

const PostLoc = styled.div`
	margin-top: 15px;
	width: 100%;
	border: 0.5px solid black;
	border-radius: 5px;
	display: flex;
	padding: 25px;
	flex-direction: column;
`;

const PostedIn = styled.div`
	font-weight: 500;
	font-size: 25px;
	margin-bottom: 20px;
`;
const LocName = styled.div`
	font-weight: 200px;
	font-size: 15px;
    margin-bottom:10px;
`;

const ImgWr = styled.div`
    width:100%;
    height:35vh;
`;

const MapImg = styled.img`
	width: 100%;
	height: 100%;
`;

const SeeLoc = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AdID = styled.div`
font-weight:500;
font-size:18px;
padding:25px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const ItemDetails = () => {
	const location = useLocation();
	const adId = location.pathname.split("/")[2]
	const [add,setAdd] = useState({})
	
	useEffect(()=>{
		const getAdd = async () => {
			try {
				const res = await axios.get(`http://localhost:5010/api/ads/${adId}`);
				setAdd(res.data)

			} catch (error) {
				console.log(error)
			}
		}
		getAdd();
	},[adId])
	add.details && Object.keys(add.details).map(key => (
		console.log(key,add.details[key])
	));
	return (
		<Cont>
			<CatPath>
				Home / Vehicles / Cars for Sale / Cars for Sale in Cairo / Cars for Sale
				in Cairo / Mistudbishi in Cairo
			</CatPath>
			<ItemCont>
				<Left>
					<ImageSliderWr>
						<ImageSlider>
							{/* <Image src='https://images.olx.com.eg/thumbnails/32706056-400x300.webp' /> */}
							<Image src={add.mainImage} />
						</ImageSlider>
						<Thumbs>
							{add.otherImages?.map((img, ind) => (
								<ThumbImage key={ind} src={img} />
							))}
						</Thumbs>
					</ImageSliderWr>
					<DetailsWr>
						<Details>
							<Title>Details</Title>
							<DetailsCont>
								{add.details &&
									Object.keys(add.details).map((key) => (
										<DetailItem>
											<DetailTitle>{key} :</DetailTitle>
											<DetailValue>{add.details[key]}</DetailValue>
										</DetailItem>
									))}
							</DetailsCont>
						</Details>
						<Hr />
						<Description>
							<Title>Description</Title>
							<DescriptionText>{add.desc}</DescriptionText>
						</Description>
						<Hr />
						<RelatedAds>
							<Title>Related Ads</Title>
							<AdsCont>
								{/* <Item type='Ads' />
								<Item type='Ads' />
								<Item type='Ads' /> */}
							</AdsCont>
						</RelatedAds>
					</DetailsWr>
				</Left>
				<Right>
					<Price>
						<PriceLeft>
							<UnitePrice>EGP {add.price}</UnitePrice>
							<Milage>{add.details?.Kilometers}</Milage>
							<Name>{`${add.details?.Brand} ${add.details?.Model} ${add.details?.Year}`}</Name>
							<Location>Downtown Cairo, Cairo</Location>
						</PriceLeft>
						<PriceRight>
							<IconsWr>
								<FavoriteBorderOutlinedIcon />
								<ShareOutlinedIcon />
							</IconsWr>
							<PostTime>1 week ago</PostTime>
						</PriceRight>
					</Price>
					<SellerDescription>
						<SellerDescr>Seller Description</SellerDescr>
						<SellerWr>
							<Avatar
								alt='Remy Sharp'
								src='https://www.olx.com.eg/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png'
								sx={{ width: 100, height: 100 }}
							/>
							<SellerData>
								<AddTitle>{add.Title}</AddTitle>
								<MemberSince>Member since 2020</MemberSince>
							</SellerData>
							<ArrowForwardIosIcon />
						</SellerWr>

						<Tele>
							<LocalPhoneOutlinedIcon /> ** *** ** <a>Show Number</a>
						</Tele>
					</SellerDescription>
					<Safety>
						<SafteyTitle>Your safety matters to us!</SafteyTitle>
						<SafetyPoints>
							<SafteyPoint>
								Only meet in public / crowded places for example metro stations
								and malls.
							</SafteyPoint>
							<SafteyPoint>
								Never go alone to meet a buyer / seller, always take someone
								with you.
							</SafteyPoint>
							<SafteyPoint>
								Check and inspect the product properly before purchasing it.
							</SafteyPoint>
							<SafteyPoint>
								Never pay anything in advance or transfer money before
								inspecting the product.
							</SafteyPoint>
						</SafetyPoints>
					</Safety>
					<PostLoc>
						<PostedIn>Posted in</PostedIn>
						<LocName>Downtown Cairo</LocName>
						<ImgWr>
							<MapImg src='https://www.olx.com.eg/assets/mapPlaceholder_noinline.af3a4b7300a65b66f974eed7023840ac.svg' />
						</ImgWr>
						<SeeLoc>
							<span>See Location</span>
							<ArrowForwardIosIcon />
						</SeeLoc>
					</PostLoc>
					<AdID>
						<span>AD ID 192360767</span>
						<span>REPORT THIS AD</span>
					</AdID>
				</Right>
			</ItemCont>
		</Cont>
	);
};

export default ItemDetails;
