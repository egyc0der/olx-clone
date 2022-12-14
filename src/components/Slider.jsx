import styled from '@emotion/styled'

const Cont = styled.div`
	width: 100%;
	height: 180px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;
	@media only screen and (max-width: 390px) {
		display:none;
	}
`;

const SliderWr = styled.div`
    width:100%;height:100%;
    background-color:teal;
    overflow-x: auto;
    overflow-y: hidden;
`

const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: fill;
`

const Slider = () => {
  return (
		<Cont>
			<SliderWr>
				<Img src='https://i.ibb.co/9Zwm2Dx/click4ebusi-Banner.png' alt='' />
			</SliderWr>
		</Cont>
	);
}

export default Slider