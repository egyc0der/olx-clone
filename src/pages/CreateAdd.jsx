import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast , ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cont = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 25px;
`;
const Form = styled.form`
	width: 100%;
	border: 1px solid black;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 50px;
	gap: 30px;
`;

const DetailsCont = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;
const Left = styled.div`
	flex-basis: 50%;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: flex-start;
`;

const Right = styled.div`
	flex-basis: 50%;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: flex-end;
`;

const CreateAdd = () => {
	const [formData, setFormData] = useState({});
	const [readyToSubmit, setReadyToSubmit] = useState(false);

	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		const saveAd = async () => {
			try {
				const res = await axios.post(
					"https://immense-plateau-15059.herokuapp.com/api/ads/",
					formData
				);
				res.data && setSuccess(true);

				console.log(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		if (formData && readyToSubmit) {
			saveAd();
		}
	}, [formData, readyToSubmit]);

	useEffect(() => {
		success && notify() 
	}, [success]);

	const handleChange = (e) => {
		setFormData((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleChange_details = (e) => {
		setFormData({
			...formData,
			details: { ...formData.details, [e.target.name]: e.target.value },
		});
	};

	const handleThumbs = (e) => {
		setFormData({ ...formData, otherImages: e.target.value.split(",") });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setReadyToSubmit(true);
	};
	const notify = () => {
		toast.success("Success Notification !", {
			position: toast.POSITION.TOP_CENTER,
		});
		navigate('/');
	};
	return (
		<Cont>
			<Typography variant='h4' mb='10px'>
				Place your Advertisement details
			</Typography>
			<Form onSubmit={handleSubmit}>
				<TextField
					name='Title'
					variant='outlined'
					label='Title'
					color='warning'
					sx={{ width: "80%", input: { color: "white" } }}
					onChange={handleChange}
				/>
				<TextField
					name='price'
					color="warning"
					variant='outlined'
					label='Price in EGP'
					sx={{ width: "80%" ,input: { color: "white" }}}
					onChange={handleChange}
				/>
				<TextField
					name='desc'
					color="warning"
					variant='outlined'
					label='Description'
					sx={{ width: "80%",input: { color: "white" } }}
					multiline
					rows={5}
					onChange={handleChange}
				/>
				<TextField
					name='mainImage'
					color="warning"
					variant='outlined'
					label='Main Image URL'
					sx={{ width: "80%",input: { color: "white" } }}
					onChange={handleChange}
				/>
				<TextField
					name='otherImages'
					color="warning"
					variant='outlined'
					label='Thumbnails separated with commas'
					sx={{ width: "80%" ,input: { color: "white" }}}
					onChange={handleThumbs}
				/>
				<DetailsCont>
					<Left>
						<TextField
							name='Brand'
							color="warning"
							variant='outlined'
							label='Brand'
							sx={{ width: "90%",input: { color: "white" } }}
							onChange={handleChange_details}
						/>
						<TextField
							name='Ad Type'
							color="warning"
							variant='outlined'
							label='Ad Type'
							sx={{ width: "90%",input: { color: "white" } }}
							onChange={handleChange_details}
						/>
						<TextField
							name='Payment Options'
							color="warning"
							variant='outlined'
							label='Payment Options'
							sx={{ width: "90%" ,input: { color: "white" }}}
							onChange={handleChange_details}
						/>
						<TextField
							name='Kilometers'
							color="warning"
							variant='outlined'
							label='Kilometers'
							sx={{ width: "90%" ,input: { color: "white" }}}
							onChange={handleChange_details}
						/>
						<TextField
							name='Condition'
							color="warning"
							variant='outlined'
							label='Condition'
							sx={{ width: "90%",input: { color: "white" } }}
							onChange={handleChange_details}
						/>
						<TextField
							name='Engine Capacity (CC)'
							color="warning"
							variant='outlined'
							label='Engine Capacity (CC)'
							sx={{ width: "90%",input: { color: "white" } }}
							onChange={handleChange_details}
						/>
					</Left>
					<Right>
						<TextField
							name='Model'
							color="warning"
							variant='outlined'
							label='Model'
							sx={{ width: "90%" ,input: { color: "white" }}}
							onChange={handleChange_details}
						/>
						<TextField
							name='Body Type'
							color="warning"
							variant='outlined'
							label='Body Type'
							sx={{ width: "90%",input: { color: "white" } }}
							onChange={handleChange_details}
						/>
						<TextField
							name='Fuel Type'
							color="warning"
							variant='outlined'
							label='Fuel Type'
							sx={{ width: "90%",input: { color: "white" } }}
							onChange={handleChange_details}
						/>
						<TextField
							name='Year'
							color="warning"
							variant='outlined'
							label='Year'
							sx={{ width: "90%",input: { color: "white" } }}
							onChange={handleChange_details}
						/>
						<TextField
							name='Transmission Type'
							color="warning"
							variant='outlined'
							label='Transmission Type'
							sx={{ width: "90%",input: { color: "white" } }}
							onChange={handleChange_details}
						/>
						<TextField
							name='Color'
							color="warning"
							variant='outlined'
							label='Color'
							sx={{ width: "90%" ,input: { color: "white" }}}
							onChange={handleChange_details}
						/>
					</Right>
				</DetailsCont>
				<Button
					type='submit'
					sx={{ width: "80%" }}
					variant='contained'
					color='info'
				>
					Submit
				</Button>
			</Form>
			<ToastContainer />
		</Cont>
	);
};

export default CreateAdd;
