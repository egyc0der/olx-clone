import styled from "@emotion/styled";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Cont = styled.div`
	height: ${(props) => (props.type === "Ads" ? "250px" : "500px")};
	width: ${(props) => (props.type === "Ads" ? "250px" : "380px")};
	border: 2px solid gray;
	margin: 5px;
	display: flex;
	flex-direction: column;
`;
const Upper = styled.div`
	flex-basis: 50%;
	overflow: hidden;
	border-bottom: 2px solid gray;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Down = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding:5px;	
`;

const Title = styled.span`
	font-weight: 500;
	font-size: ${props => props.type === 'Ads' ? '20px' : '1.2vw'};
`;

const Price = styled.span`
	font-weight:700;
	font-size: ${props => props.type === 'Ads' ? '18px' : '1.5vw'};
`;

const Specs = styled.span`
	font-weight: 200;
	font-size: ${(props) => (props.type === "Ads" ? "15px" : "1.2vw")};
`;

const Place = styled.span`
	font-weight: 200;
	font-size: ${(props) => (props.type === "Ads" ? "15px" : "1.2vw")};
`;

const PostTime = styled.span`
	font-weight: 200;
	font-size: ${(props) => (props.type === "Ads" ? "15px" : "1.2vw")};
`;

const Item = ({ item }) => {
	console.log('item from Item',item)
	return (
		<Cont>
			<Upper>
				<Image src={item.mainImage} alt='' />
			</Upper>
			<Down>
				<Title>
					{item.Title}
					<span>
						<FavoriteBorderOutlinedIcon />
					</span>
				</Title>
				<Price>EGP {item.price}</Price>
				<Specs>Model: {item.details.Year}</Specs>
				<Place>Downtown Cairo, Cairo</Place>
				<PostTime>1 week ago</PostTime>
			</Down>
		</Cont>
	);
};

export default Item;
