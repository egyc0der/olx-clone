import Item from "./Item";
import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Cont = styled.div`
	padding-bottom:30px;
`;
const Title = styled.span`
	display: inline-block;
	margin: 20px 0;
	font-size: 1.3rem;
`;
const ItemsCont = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	background-color: rgba(1, 1, 1, 0.1);
`;
const Items = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					"https://immense-plateau-15059.herokuapp.com/api/ads/all"
				);
				setItems(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getProducts();
	}, []);

	console.log("items", items);
	return (
		<Cont>
			<Title>Fresh Recomendations</Title>
			<Grid container spacing={0} columns={{ xs: 1, sm: 2, md: 6, lg: 8 }}>
				{items?.map((item, index) => (
					<Grid item xs={1} sm={1} md={2} key={index}>
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={`/item/${item._id}`}
						>
							<Item item={item} />
						</Link>
					</Grid>
				))}
			</Grid>
		</Cont>
	);
};

export default Items;
/* <Cont>
			
			<ItemsCont>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</ItemsCont>
		</Cont> */
