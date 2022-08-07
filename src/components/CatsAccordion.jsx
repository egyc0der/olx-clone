import Accordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled as st  } from '@mui/material/styles';
import styled from '@emotion/styled';


const Cont = styled.div`
	padding: 0 1.5rem;
	background-color: #256d85;
	color: "white";
	@media (min-width: 1800px) {
		padding: 0 10rem;
	}
`;


const AccordionSummary = st((props) => (
	<MuiAccordionSummary
		expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.4rem" }} />}
		{...props}
	/>
))(() => ({
	width: "fit-content",
	padding: 0,
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(180deg)",
	},
	color: 'white',
}));


const CatWr = styled.div`
	display: flex;
	flex-wrap: wrap;
	color: "white";
`;

const UL = styled.ul`
    width:230px;
    margin-bottom:1rem;
`

const ListTitle = styled.span`
    display:inline-block;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom:0.9rem;
`

const LI = styled.li`
    font-size: 0.8rem;
    list-style:none;
    margin-bottom:0.3rem;
`
const CatsAccordion = () => {
  return (
		<Cont>
			<Accordion sx={{ backgroundColor: "#256D85" }} elevation={0}>
				<AccordionSummary sx={{ backgroundColor: "#256D85" }}>
					<Typography
						sx={{ fontSize: "0.8rem", color: "white", fontWeight: 700 }}
					>
						ALL CATEGORIES
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{color:'white'}}>
					<CatWr>
						<UL>
							<ListTitle>Vehicles</ListTitle>
							<LI>Cars for Sale</LI>
							<LI>Cars for Rent</LI>
							<LI>Tyres, Batteries, Oils, & Accessories</LI>
							<LI>Car Spare Parts</LI>
							<LI>Boats - Watercraft</LI>
							<LI>Heavy Trucks, Buses & Other Vehicles</LI>
						</UL>
						<UL>
							<ListTitle>Vehicles</ListTitle>
							<LI>Cars for Sale</LI>
							<LI>Cars for Rent</LI>
							<LI>Tyres, Batteries, Oils, & Accessories</LI>
							<LI>Car Spare Parts</LI>
							<LI>Boats - Watercraft</LI>
							<LI>Heavy Trucks, Buses & Other Vehicles</LI>
						</UL>
						<UL>
							<ListTitle>Vehicles</ListTitle>
							<LI>Cars for Sale</LI>
							<LI>Cars for Rent</LI>
							<LI>Tyres, Batteries, Oils, & Accessories</LI>
							<LI>Car Spare Parts</LI>
							<LI>Boats - Watercraft</LI>
							<LI>Heavy Trucks, Buses & Other Vehicles</LI>
						</UL>
						<UL>
							<ListTitle>Vehicles</ListTitle>
							<LI>Cars for Sale</LI>
							<LI>Cars for Rent</LI>
							<LI>Tyres, Batteries, Oils, & Accessories</LI>
							<LI>Car Spare Parts</LI>
							<LI>Boats - Watercraft</LI>
							<LI>Heavy Trucks, Buses & Other Vehicles</LI>
						</UL>
						<UL>
							<ListTitle>Vehicles</ListTitle>
							<LI>Cars for Sale</LI>
							<LI>Cars for Rent</LI>
							<LI>Tyres, Batteries, Oils, & Accessories</LI>
							<LI>Car Spare Parts</LI>
							<LI>Boats - Watercraft</LI>
							<LI>Heavy Trucks, Buses & Other Vehicles</LI>
						</UL>
						<UL>
							<ListTitle>Vehicles</ListTitle>
							<LI>Cars for Sale</LI>
							<LI>Cars for Rent</LI>
							<LI>Tyres, Batteries, Oils, & Accessories</LI>
							<LI>Car Spare Parts</LI>
							<LI>Boats - Watercraft</LI>
							<LI>Heavy Trucks, Buses & Other Vehicles</LI>
						</UL>
					</CatWr>
				</AccordionDetails>
			</Accordion>
		</Cont>
	);
}

export default CatsAccordion