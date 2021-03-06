import React from 'react';
import { useHistory } from 'react-router-dom';
import Seta from '../../assets/images/seta.svg';
import Text from '../Text/';
import './Header.scss';

export default function Header(props) {
	const history = useHistory();

	const { title, subTitle } = props;
	function comeBack() {
		history.goBack();
	  }
	
	return (
		<header className="header">
			<img onClick={comeBack} className="arrow" src={Seta} alt="seta" />
			<div className="textform">
				<Text className="titulo" type="titleheader">
					{title}
				</Text>
				<Text type="subtitleheader">{subTitle}</Text>
			</div>
		</header>
	);
}
