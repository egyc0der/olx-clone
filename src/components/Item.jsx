import styled from "@emotion/styled";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Cont = styled.div`
	height: 400px;
	width: 360px;
	border: 2px solid gray;
	margin: 5px;
	display: flex;
	flex-direction: column;
	&:hover {
		transform: scaleX(1.1);
		background-color: #8fe3cf44;
		transition: all 0.5s ease-in-out;
	}
	@media only screen and (max-width: 390px) {
		width: 330px;
	}
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
	padding: 5px;
`;

const Title = styled.span`
	font-weight: 500;
	font-size: 25px;
	@media only screen and (max-width: 390px) {
		font-size: 25px;
	}
`;

const Price = styled.span`
	font-weight: 700;
	font-size: 30px;
`;

const Specs = styled.span`
	font-weight: 200;
	font-size: 25px;
`;

const Place = styled.span`
	font-weight: 200;
	font-size: 25px;
`;

const PostTime = styled.span`
	font-weight: 200;
	font-size: 25px;
`;

const Item = ({ item }) => {
	console.log("item from Item", item);
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
