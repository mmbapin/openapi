import React, { useState } from 'react'
import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import MegaMenu from './MegaMenu';

const Header = () => {
	const menuData = [
		{
			menuName: 'Our Company',
			subMenu: [
				{
					subMenuName: 'Ceo Message',
					subMenuChild: []
				},
				{
					subMenuName: 'Digital Communitaion Center',
					subMenuChild: []
				},
				{
					subMenuName: 'Global Network',
					subMenuChild: []
				},
				{
					subMenuName: 'History',
					subMenuChild: []
				},
				{
					subMenuName: 'CI',
					subMenuChild: []
				},
				{
					subMenuName: 'Contact',
					subMenuChild: []
				}
			]
		},
		{
			menuName: 'Our Business',
			subMenu: [
				{
					subMenuName: 'Digital Identification',
					subMenuChild: [
						{
							subMenuChildName: 'Smart IC Chip'
						},
						{
							subMenuChildName: 'Smart Card'
						},
						{
							subMenuChildName: 'Electronic Card'
						},
						{
							subMenuChildName: 'Authentication Service'
						}
					]
				},
				{
					subMenuName: 'Payment Platform',
					subMenuChild: [
						{
							subMenuChildName: 'Kona Payment Platform'
						},
						{
							subMenuChildName: 'Kona Card'
						},
						{
							subMenuChildName: 'Kona Benifits Card'
						},
						{
							subMenuChildName: 'Kona Affiliate Card'
						}
					]
				},
				{
					subMenuName: 'Local Communication Platform',
					subMenuChild: [
						{
							subMenuChildName: 'Local Currency'
						},
						{
							subMenuChildName: 'Local Community Service'
						}
					]
				},
				{
					subMenuName: 'Mobility Platform',
					subMenuChild: [
						{
							subMenuChildName: 'Mobility Platform'
						},
						{
							subMenuChildName: 'Delivery Service'
						},
						{
							subMenuChildName: 'Taxi Call Service'
						},
						{
							subMenuChildName: 'Traditional Market Shopping Service'
						}
					]
				},
				{
					subMenuName: 'Blockchain Platform',
					subMenuChild: [
						{
							subMenuChildName: 'Blockchain Platform'
						},
						{
							subMenuChildName: 'Daap Service'
						}
					]
				},
				{
					subMenuName: 'Data Platform',
					subMenuChild: [
						{
							subMenuChildName: 'Data Platform'
						}
					]
				},
				{
					subMenuName: 'Healthcare Platform',
					subMenuChild: [
						{
							subMenuChildName: 'Healthcare Platform'
						}
					]
				},
				{
					subMenuName: 'IoT Platform',
					subMenuChild: [
						{
							subMenuChildName: 'Kona DM and FOTA'
						},
						{
							subMenuChildName: 'Kona Things Platform'
						},
						{
							subMenuChildName: 'Kona AMI Platform'
						}
					]
				},
				{
					subMenuName: 'Metaverse Platform',
					subMenuChild: [
						{
							subMenuChildName: 'Kona Meta World'
						}
					]
				}
			]
		},
		{
			menuName: 'IR',
			subMenu: []
		},
		{
			menuName: 'PR',
			subMenu: []
		},
		{
			menuName: 'Recruit',
			subMenu: []
		},
	]

	const [lang, setLang] = useState('EN')
	const [menuColor, setMenuColor] = useState('white')
	// const [linkActive, setLinkActive] = useState(false)

	const handleLangChange = (lang) => {
		console.log(lang);
		setLang(lang)
	}

	const handleMouseMovements = (effect) => {
		if (effect === 'Enter') {
			setMenuColor('black')
		} else {
			setMenuColor('white')
		}
	}

	// const handleMouseMovementsLink = (effect) => {
	// 	console.log(effect);
	// 	if (effect === 'Link Enter') {
	// 		setLinkActive(true)
	// 	}else{
	// 		setLinkActive(false)
	// 	}
	// }
	return (
		<React.Fragment>
			<CssBaseline />
			<Container className={menuColor === 'white' ? 'mainnav' : 'mainnav mainnav--white'} maxWidth="false" sx={{ display: 'flex' }}>
				<div className='mainnav__logoblc'>
					<a href='#'>
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 27" style={{ enableBackground: 'new 0 0 120 27' }} xmlSpace="preserve">
							<g>
								<g>
									<path d="M78.8,24.5L91.2,1.6l12.3,22.9h-5.2l-7.1-14.1L84,24.5H78.8z M70.8,24.5V6.3H57.6v18.2H53V2.2h22.3v22.3H70.8z M44.4,13.4
																c0-4.6-3.5-8.3-7.9-8.3c-4.4,0-7.9,3.7-7.9,8.3c0,4.6,3.5,8.4,7.9,8.4C40.9,21.8,44.4,18,44.4,13.4 M48.8,13.4
																c0,6.7-5.6,12.3-12.4,12.3s-12.4-5.5-12.4-12.3c0-6.7,5.6-12.3,12.4-12.3S48.8,6.6,48.8,13.4 M5.5,13.3L16.8,2.2h5.7L11.2,13.3
																l12.1,11.2h-5.9L5.5,13.3z M1,2.2h4.5v22.3H1V2.2z" />
								</g>
								<rect x="114.7" y="2.2" width="4.5" height="22.3" />
							</g>
						</svg>

					</a>
				</div>
				<div className='mainnav__menublc'>
					<ul className='mainnav__menulist'>
						{menuData?.map((item, index) => (
							<li 
								className='mainnav__menuitem' 
								key={index} 
								onMouseEnter={() => handleMouseMovements("Enter")} 
								onMouseLeave={() => handleMouseMovements("Leave")}
							>
								{/* {index != (menuData.length - 1) ? 
								(<a className='mainnav__menulink' href="#" onMouseEnter={() => handleMouseMovementsLink("Link Enter")} onMouseLeave={() => handleMouseMovementsLink("Link Leave")}>{item.menuName}</a>) 
								: (<a className='mainnav__menulink' href="#">{item.menuName}</a>)
								} */}
								<a 
									className='mainnav__menulink' 
									href="#"
								>
									<span>
										{item.menuName}
									</span>
								</a>
								{index !== (menuData.length - 1) && (<MegaMenu megaMenuItem={item.subMenu} tag={index} />)}

							</li>
						))}
					</ul>
				</div>
				<div className='mainnav__langblc'>
					{lang === 'EN' ? 
					(<div className='mainnav__langwrp'><span className={lang === 'EN' ? 'mainnav__langwrp--active' : ''} onClick={() => handleLangChange('EN')}>EN</span><span className={lang === 'KR' ? 'mainnav__langwrp--active' : ''} onClick={() => handleLangChange('KR')}>KR</span></div>) 
					: 
					(<div className='mainnav__langwrp'>
						<span 
							className={lang === 'KR' ? 'mainnav__langwrp--active' : ''} 
							onClick={() => handleLangChange('KR')}
							>
								KR
							</span>
							<span 
								className={lang === 'EN' ? 'mainnav__langwrp--active' : ''} 
								onClick={() => handleLangChange('EN')}
							>
								EN
							</span>
						</div>)
					}
				</div>
			</Container>
		</React.Fragment>
	)
}

export default Header