import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<>

		<div className="">
			<div className="works">
				<Card
					icon={faBriefcase}
					title="Work"
					body={
						<div className="works-body">
							<div className="work">
								<div className="work-title">University Of Toronto (UFT)</div>
								<div className="work-subtitle">
									Senior Software Engineer
								</div>
								<div className="work-duration">Jan 2024 - Present</div>
							</div>

							<div className="work">
								<div className="work-title">Binance</div>
								<div className="work-subtitle">
									Senior Software Engineer
								</div>
								<div className="work-duration">July 2022 - June 2023</div>
							</div>
							<div className="work">
								<div className="work-title">VerticalScope Inc.</div>
								<div className="work-subtitle">
									Software Engineer
								</div>
								<div className="work-duration">July 2021 - Jun 2022</div>
							</div>
							<div className="work">
								<div className="work-title">Afilias</div>
								<div className="work-subtitle">
									Team Lead
								</div>
								<div className="work-duration">June 2018 - Jul 2021</div>
							</div>
							<div className="work">
								<div className="work-title">Afilias</div>
								<div className="work-subtitle">
									Senior Software Engineer
								</div>
								<div className="work-duration">Feb 2016 - June 2018</div>
							</div>
						</div>
					}
				/>
				
			</div>
		</div>

		<div className="work-card-left">
			<div className="works">
				<Card
					icon={faBriefcase}
					title="Work"
					body={
						<div className="works-body">
							<div className="work">
								<div className="work-title">BlockX Labs</div>
								<div className="work-subtitle">
									Technologist in Residence
								</div>
								<div className="work-duration">Nov 2017 - Mar 2018</div>
							</div>

							<div className="work">
								<div className="work-title">API Garage</div>
								<div className="work-subtitle">
									Application Developer
								</div>
								<div className="work-duration">Jun 2015 - Jun 2016</div>
							</div>
							<div className="work">
								<div className="work-title">Carlton Group Ltd.</div>
								<div className="work-subtitle">
									Application Developer
								</div>
								<div className="work-duration">Oct 2014 - Jan 2016</div>
							</div>
							<div className="work">
								<div className="work-title">CareerPal.co - contract</div>
								<div className="work-subtitle">
									PHP Web Developer
								</div>
								<div className="work-duration">Jun 2014 - Oct 2014</div>
							</div>
							<div className="work">
								<div className="work-title">Pavr Labs</div>
								<div className="work-subtitle">
									PHP Web Developer 
								</div>
								<div className="work-duration">Mar 2013 - Apr 2014</div>
							</div>
						</div>
					}
				/>
				
			</div>
		</div>
		</>
	);
};

export default Works;
