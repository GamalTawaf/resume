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
		</>
	);
};

export default Works;
